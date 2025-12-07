import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, email, organization, message } = body;

    // 이메일로 전송할 내용
    const emailContent = `
새로운 문의가 접수되었습니다.

문의 유형: ${type}
이름: ${name}
이메일: ${email}
소속 기관/회사: ${organization || "미입력"}
문의 내용:
${message}

---
이 메일은 MediX 웹사이트 Contact 폼에서 자동으로 전송되었습니다.
    `;

    // 받을 이메일 주소 확인
    const recipientEmail = process.env.CONTACT_EMAIL;
    if (!recipientEmail) {
      console.error("CONTACT_EMAIL 환경 변수가 설정되지 않았습니다.");
      return NextResponse.json(
        { error: "이메일 설정이 완료되지 않았습니다." },
        { status: 500 }
      );
    }

    // 이메일 전송
    // Resend 무료 티어에서는 onboarding@resend.dev 사용 가능
    // 프로덕션에서는 도메인 인증 후 본인 도메인 사용 권장
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "MediX Contact <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `[MediX] ${type} - ${name}`,
      text: emailContent,
      replyTo: email, // 답장 시 문의자 이메일로 답장 가능
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "이메일 전송에 실패했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "문의가 성공적으로 접수되었습니다.", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

