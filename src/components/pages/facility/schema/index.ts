import { z } from "zod";

export type FaciltyRegisterSchema = z.infer<typeof facilityRegisterSchema>;

export type BusinessNumberConfirmSchema = z.infer<
  typeof businessNumberConfirmSchema
>;

// 시설 등록 schema
export const facilityRegisterSchema = z.object({
  // 대표자 이름
  representativeName: z.string().min(2, { message: "회원이름은 필수 입니다." }),
  // 사업자 번호 인증
  businessNumber: z.string().max(8, {
    message: "사업자 번호는 최대 8자리 입니다.",
  }),

  // 개업일자
  // OpeningDate: z.string(),

  // 통신 판매 번호
  mailOrderNumber: z.string().nonempty("닉네임을 입력해주세요."),
});

// 사업자 번호 인증 schema
export const businessNumberConfirmSchema = facilityRegisterSchema.pick({
  businessNumber: true,
});
