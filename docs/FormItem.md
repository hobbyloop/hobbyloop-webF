# FormItem

## FormItem이란?

- FormItem는 `폼 구성요소`들을 사용하기 쉽게 템플릿으로 제공해주는 organism 컴포넌트입니다.
- Label과 Input을 한 번에 관리하기 위해 만들어졌습니다.

  ![FormItem예시](https://github.com/hobbyloop/hobbyloop-webF/assets/47495592/0cca6582-4b6f-4df3-b305-2f14d8d1cf02)

- Form을 제공해주는건 아니고, Form 내부의 구성요소 각각을 하나의 파일로 관리합니다.

## 기본 개념

### FormItem Props

| Prop Name       | Type                             | Description                   | Example                                |
| --------------- | -------------------------------- | ----------------------------- | -------------------------------------- |
| templateId      | TemplateId                       | 템플릿 ID                     | "textInput", "radio"                   |
| fiedlsetOptions | FieldsetOptions                  | Fieldset의 전반적인 구성 옵션 | { legendText: "이름", required: true } |
| factory         | Factory (TemplateId에 따라 변경) | Input 요소들의 구성 옵션      |                                        |

### 사용법 (단일요소)

- 폼 요소를 구성하는 element가 단일인 경우
  - Ex) TextInput / DateInput

```tsx
<FormItem
  templateId="textInput"
  fieldsetOptions={{
    legendText: "이름",
    required: true,
  }}
  factory={{
    onChange: (value) => console.log(value),
    element: {
      inputSize: "long",
      placeholder: "이름을 입력해주세요.",
    },
  }}
/>
```

![textInput사용예제](https://github.com/hobbyloop/hobbyloop-webF/assets/47495592/b4ac02e7-e2f2-4a29-919c-fef8ef2b1586)

### 사용법 (다중요소)

- 폼 요소를 구성하는 element가 여러개인 경우
  - Ex) RadioInput / CheckboxInput

```tsx
<FormItem
  templateId="radio"
  fieldsetOptions={{
    legendText: "자유이용권 업체 가입 여부",
  }}
  factory={{
    name: "freeCompany",
    onChange: (value) => (freeCompanyRef.current = value),
    elements: [
      {
        label: "가입 요청",
        value: "1",
      },
      {
        label: "미가입",
        value: "2",
      },
    ],
  }}
/>
```

![radioInput사용예제](https://github.com/hobbyloop/hobbyloop-webF/assets/47495592/7b71b6e6-f0ee-4000-980c-1de05a8a756c)

## TemplateId

| TemplateId        | Image                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| textInput         | <img src="https://github.com/hobbyloop/hobbyloop-webF/assets/47495592/27a56a4d-2db0-4602-b734-033d7832a576" width="540"> |
| textarea          | <img src="https://github.com/hobbyloop/hobbyloop-webF/assets/47495592/eca0ffe3-ff34-4803-bae6-d85eec347fa5" width="540"> |
| inputWithButton   | <img src="https://github.com/hobbyloop/hobbyloop-webF/assets/47495592/e3cf980a-3d37-4fc4-ae65-203905fea439" width="540"> |
| radio             | <img src="https://github.com/hobbyloop/hobbyloop-webF/assets/47495592/16e994c1-13c8-430a-b598-2f9c0f9f1bd7" >            |
| rectangleRadio    | <img src="https://github.com/hobbyloop/hobbyloop-webF/assets/47495592/05c429f4-5b21-45f8-a13f-f590b59a24d2" width="540"> |
| rectangleCheckbox | <img src="https://github.com/hobbyloop/hobbyloop-webF/assets/47495592/724a8345-edf3-46be-b74f-5d10f1d0cdd8" width="540"> |

## FieldsetOptions

| Property   | Type    | Required | Description                    | Example  | Image                                                                                                                     |
| ---------- | ------- | -------- | ------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| legendText | string  | X        | 라벨 이름 (undefined면 미노출) | `"이름"` | <img width="200" src="https://github.com/hobbyloop/hobbyloop-webF/assets/47495592/8c836b34-cca8-496e-b8aa-011c5cc84e69"/> |
| required   | boolean | X        | 필수값 입력 여부               | `true`   | <img width="200" src="https://github.com/hobbyloop/hobbyloop-webF/assets/47495592/b27ee4cf-bd33-48e3-b747-75c7ec976a38"/> |
