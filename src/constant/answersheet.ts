import { Question } from "../types/Question";

interface AnswerSheetChapter {
  chapter: number;
  title: string;
  questions: Question[];
}

export interface IndexInfo {
  chapter: number;
  questionIndex: number;
}

export const answerSheet: AnswerSheetChapter[] = [];
// 제1장: 사람의 목적
answerSheet[0] = {
  chapter: 1,
  title: "사람의 목적",
  questions: [
    {
      question: "사람의 제일 되는 목적은 무엇입니까?",
      necessary: true,
      answers: [
        {
          text: "하나님을 영화롭게 하는 것과",
          includes: ["하나님을 영화롭게"],
        },
        {
          text: "영원토록 그를 즐거워하는 것입니다.",
          includes: ["영원", "그를 즐거워"],
        },
      ],
    },
  ],
};

// 제2장: 성경은 무슨 책입니까?
answerSheet[1] = {
  chapter: 2,
  title: "성경은 무슨 책입니까?",
  questions: [
    {
      question: "우리의 신앙과 생활의 유일한 법칙은 무엇입니까?",
      necessary: false,
      answers: [
        {
          text: "신구약 성경, 즉 정확하고 오류가 없는 하나님의 말씀입니다.",
          includes: ["신구약", "정확하고 오류가 없는 하나님의 말씀"],
        },
      ],
    },
    {
      question: "성경은 몇 권으로 기록되어 있습니까?",
      necessary: true,
      answers: [
        {
          text: "구약 39권, 신약 27권, 모두 66권으로 되어 있습니다.",
          includes: ["구약 39권, 신약 27권, 모두 66권"],
        },
      ],
    },
    {
      question: "성경은 누가 기록하였습니까?",
      necessary: false,
      answers: [
        {
          text: "하나님께 특별히 선택된 사람들이 성령의 감동으로 기록하였습니다.",
          includes: ["특별히 선택된 사람들이 성령의 감동으로"],
        },
      ],
    },
    {
      question: "구약에 기록된 내용은 무엇입니까?",
      necessary: true,
      answers: [
        {
          text: "피조물의 창조와 타락",
          includes: ["창조", "타락"],
        },
        {
          text: "구원을 위해 오실 예수 그리스도에 대한 말씀이 기록되어 있습니다.",
          includes: ["구원", "예수"],
        },
      ],
    },
    {
      question: "신약에 기록된 내용은 무엇입니까?",
      necessary: true,
      answers: [
        {
          text: "예수 그리스도의 구원 사역과",
          includes: ["예수", "구원"],
        },
        {
          text: "구원 받은 자의 삶과",
          includes: ["구원 받은 자의 삶"],
        },
        {
          text: "예수 그리스도의 재림과 영생에 대한 말씀이 기록되어 있습니다.",
          includes: ["재림", "영생"],
        },
      ],
    },
    {
      question: "성경은 어떻게 읽어야 합니까?",
      necessary: false,
      answers: [
        {
          text: "매일매일 읽고",
          includes: ["매일"],
        },
        {
          text: "그대로 지키려고 힘써야 합니다.",
          includes: ["지키려고 힘써야"],
        },
      ],
    },
  ],
};

// 제3장: 하나님은 누구십니까?
answerSheet[2] = {
  chapter: 3,
  title: "하나님은 누구십니까?",
  questions: [
    {
      question: "하나님은 몇 분이십니까?",
      necessary: false,
      answers: [
        {
          text: "오직 한 분이시며",
          includes: ["오직 한 분"],
        },
        {
          text: "삼위로 계십니다.",
          includes: ["삼위"],
        },
      ],
    },
    {
      question: "삼위 하나님은 누구이십니까?",
      necessary: true,
      answers: [
        {
          /* 성부,성자,성령 부분은 "," 표시로 대체했습니다. */
          text: "삼위는 성부,성자,성령이신데",
          includes: ["성부,성자,성령"],
        },
        {
          text: "권능과 영광이 동일하십니다.",
          includes: ["권능과 영광이 동일"],
        },
      ],
    },
    {
      question: "하나님은 언제부터 계십니까?",
      necessary: true,
      answers: [
        {
          text: "영원 전부터 영원까지",
          includes: ["영원 전부터 영원까지"],
        },
        {
          text: "스스로 계십니다",
          includes: ["스스로 계십니다"],
          verses: [
            {
              from: "출 3:14",
              text: "하나님이 모세에게 이르시되 나는 스스로 있는 자이니라",
            },
          ],
        },
      ],
    },
    {
      question: "하나님은 어디에 계십니까?",
      necessary: true,
      answers: [
        {
          text: "하나님은 계시지 않는 곳이 없으십니다.",
          includes: ["계시지 않는 곳이 없으십니다"],
        },
      ],
    },
  ],
};

// 제4장: 우주와 사람은 어떻게 시작되었습니까?
answerSheet[3] = {
  chapter: 4,
  title: "우주와 사람은 어떻게 시작되었습니까?",
  questions: [
    {
      question: "하늘과 땅은 누가 창조하셨습니까?",
      necessary: false,
      answers: [
        {
          text: "전능하신 하나님께서 말씀으로 창조하셨습니다",
          includes: ["하나님께서 말씀"],
          verses: [
            {
              from: "창 1:1",
              text: "태초에 하나님이 천지를 창조하시니라",
            },
          ],
        },
      ],
    },
    {
      question: "하나님은 며칠 동안에 천지를 창조하셨습니까?",
      necessary: false,
      answers: [
        {
          text: "6일 동안 창조하시고 7일째는 안식하셨습니다.",
          includes: ["6일 동안 창조", "7일째는 안식"],
        },
      ],
    },
    {
      question: "사람은 누가 창조하셨습니까?",
      necessary: false,
      answers: [
        {
          text: "하나님께서 자기의 형상대로 사람을 남녀로 창조하셨습니다.",
          includes: ["하나님께서 자기의 형상대로"],
        },
      ],
    },
  ],
};

// 제5장: 죄란 무엇입니까?
answerSheet[4] = {
  chapter: 5,
  title: "죄란 무엇입니까?",
  questions: [
    {
      question: "죄는 무엇입니까?",
      necessary: true,
      answers: [
        {
          text: "하나님의 말씀을 순종하지 않는 것입니다.",
          includes: ["하나님의 말씀을 순종하지 않는 것"],
        },
      ],
    },
    {
      question: "최초로 누가 범죄하였습니까?",
      necessary: true,
      answers: [
        {
          text: "인류의 조상인 아담과 하와입니다.",
          includes: ["인류의 조상인 아담과 하와"],
        },
      ],
    },
    {
      question: "아담이 불순종한 내용이 무엇입니까?",
      necessary: true,
      answers: [
        {
          text: "먹지 말라고 명하신 선악과를 따먹은 것입니다.",
          includes: ["먹지 말라고 명하신 선악과를 따먹은 것"],
        },
      ],
    },
    {
      question: "원죄란 무엇입니까?",
      necessary: true,
      answers: [
        {
          text: "인류의 대표인 아담이 지은 죄입니다.",
          includes: ["인류의 대표인 아담이 지은 죄"],
        },
        {
          text: "모든 사람이 원죄 가운데 출생합니다",
          includes: ["모든 사람", "원죄 가운데 출생"],
          verses: [
            {
              from: "롬 5:12, 18-19",
              text: "롬 5:18-19 그런즉 한 범죄로 많은 사람이 정죄에 이른 것 같이 한 의로운 행위로 말미암아 많은 사람이 의롭다 하심을 받아 생명에 이르렀느니라 한 사람이 순종하지 아니함으로 많은 사람이 죄인 된 것 같이 한 사람이 순종하심으로 많은 사람이 의인이 되리라",
            },
          ],
        },
      ],
    },
    {
      question: "원죄를 가진 우리가 스스로 지은 죄를 무엇이라 합니까?",
      necessary: true,
      answers: [
        {
          text: "자범죄라고 합니다",
          includes: ["자범죄"],
          verses: [
            {
              from: "롬 3:10-12, 23",
              text: "기록된 바 의인은 없나니 하나도 없으며...하나님을 찾는 자도 없고...선을 행하는 자는 없나니 하나도 없도다 모든 사람이 죄를 범하였으매 하나님의 영광에 이르지 못하더니",
            },
          ],
        },
      ],
    },
    {
      question: "원죄와 자범죄를 가진 사람은 어떻게 됩니까?",
      necessary: true,
      answers: [
        {
          text: "이 세상과 내세에서 하나님의 진노와 형벌을 받게 됩니다.",
          includes: ["이 세상과 내세", "하나님의 진노와 형벌"],
        },
      ],
    },
    {
      question: "멸망 받을 죄인을 구원하시기 위한 하나님의 계획은 무엇입니까?",
      necessary: true,
      answers: [
        {
          text: "독생자 예수 그리스도를 이 땅에 보내시고",
          includes: ["예수", "보내시고"],
        },
        {
          text: "모든 인류의 죄를 대신 지고 십자가에서 죽게 하는 것입니다.",
          includes: ["모든 인류의 죄를 대신 지고 십자가에서 죽게 하는 것"],
        },
      ],
    },
  ],
};

// 제6장: 예수 그리스도는 누구십니까?
answerSheet[5] = {
  chapter: 6,
  title: "예수 그리스도는 누구십니까?",
  questions: [
    {
      question: "예수 그리스도는 누구십니까?",
      necessary: false,
      answers: [
        {
          text: "하나님의 독생자이시고",
          includes: ["하나님의 독생자"],
        },
        {
          text: "우리의 구주이십니다.",
          includes: ["우리의 구주"],
        },
      ],
    },
    {
      question: "예수님은 어디에서 탄생하셨습니까?",
      necessary: false,
      answers: [
        {
          text: "유대 땅 베들레헴에서 나셨습니다.",
          includes: ["유대 땅 베들레헴"],
        },
      ],
    },
    {
      question: "예수님은 세상에 몇 년 동안 계셨습니까?",
      necessary: false,
      answers: [
        {
          text: "33년 동안 계셨습니다.",
          includes: ["33년"],
        },
      ],
    },
    {
      question: "예수님은 33년 동안 무슨 일을 하셨습니까?",
      necessary: false,
      answers: [
        {
          text: "30년은 가정에서 가사를 돕는 일을 하셨고",
          includes: ["30년", "가사를 돕"],
        },
        {
          text: "마지막 3년은 그리스도의 공적인 구원 사역을 하셨습니다.",
          includes: ["마지막 3년은 그리스도의 공적인 구원 사역"],
        },
      ],
    },
    {
      question: "예수님의 제자는 몇 분이었습니까?",
      necessary: false,
      answers: [
        {
          text: "12제자가 있었습니다.",
          includes: ["12제자"],
        },
      ],
    },
    {
      question: "예수님은 어떻게 죽으셨습니까?",
      necessary: true,
      answers: [
        {
          text: "죄 없으신 분이 우리를 대신하여 십자가에 못 박혀 죽으셨습니다(금요일).",
          includes: [
            "죄 없으신 분이 우리를 대신하여 십자가에 못 박혀 죽으셨",
            "금요일",
          ],
        },
      ],
    },
    {
      question: "예수님의 시체를 누가 장사했습니까?",
      necessary: false,
      answers: [
        {
          text: "아리마대 요셉입니다.",
          includes: ["아리마대 요셉"],
        },
      ],
    },
    {
      question: "예수님은 장사 지낸 후 어떻게 되셨습니까?",
      necessary: false,
      answers: [
        {
          text: "죽은 지 3일 만에 다시 살아나셨습니다(주일).",
          includes: ["죽은 지 3일 만에 다시 살아나셨", "주일"],
        },
      ],
    },
    {
      question: "다시 사신 후 무엇을 하셨습니까?",
      necessary: false,
      answers: [
        {
          text: "40일 동안 여러 차례 제자들에게 나타내 보이시고 가르치셨습니다",
          includes: ["40일 동안 여러 차례 제자들에게 나타내 보이시고 가르치셨"],
          verses: [
            {
              from: "고전 15:4-8",
            },
          ],
        },
      ],
    },
    {
      question: "나타내 보이신 다음에는 어떻게 되었습니까?",
      necessary: false,
      answers: [
        {
          text: "하늘로 올라가셨습니다.",
          includes: ["하늘로 올라가셨"],
        },
      ],
    },
    {
      question: "승천하실 때 하신 말씀은 무엇입니까?",
      necessary: true,
      answers: [
        {
          text: "오직 성령이 너희에게 임하시면 너희가 권능을 받고",
          includes: ["오직 성령이 너희에게 임하시면 너희가 권능을 받고"],
        },
        {
          text: "땅 끝까지 이르러 내 증인이 되리라고 하셨습니다",
          includes: ["땅 끝까지 이르러 내 증인이 되리라고 하셨습니다"],
          verses: [{ from: "행 1:8" }],
        },
      ],
    },
    {
      question: "승천하신 예수님은 어떻게 다시 오십니까?",
      necessary: false,
      answers: [
        {
          text: "하늘로 올라가심을 본 그대로 다시 오십니다.",
          includes: ["하늘로 올라가심을 본 그대로"],
        },
      ],
    },
    {
      question: "우리는 어떻게 구원을 받을 수 있습니까?",
      necessary: true,
      answers: [
        {
          text: "예수 그리스도를 믿음으로만 구원 받습니다",
          includes: ["예수 그리스도를 믿음으로만"],
          verses: [
            {
              from: "요 14:6",
              text: "예수께서 이르시되 내가 곧 길이요 진리요 생명이니 나로 말미암지 않고는 아버지께로 올 자가 없느니라",
            },
            {
              from: "갈 2:16",
              text: "사람이 의롭게 되는 것은 율법의 행위로 말미암음이 아니요 오직 예수 그리스도를 믿음으로 말미암는 줄 알므로 우리도 그리스도 예수를 믿나니...율법의 행위로써는 의롭다 함을 얻은 육체가 없느니라",
            },
          ],
        },
      ],
    },
  ],
};

// 제7장: 예배란 무엇입니까?
answerSheet[6] = {
  chapter: 7,
  title: "예배란 무엇입니까?",
  questions: [
    {
      question: "예배란 무엇입니까?",
      necessary: true,
      answers: [
        {
          text: "예배는 하나님을 섬기는 것입니다.",
          includes: ["하나님을 섬기는 것"],
        },
      ],
    },
    {
      question: "사람은 누구만을 예배해야 합니까?",
      necessary: false,
      answers: [
        {
          text: "오직 창조주이시며 구속주이신 하나님만 예배해야 합니다.",
          includes: ["창조주이시며 구속주이신 하나님만"],
        },
      ],
    },
    {
      question: "예배의 종류에는 어떤 것이 있습니까?",
      necessary: true,
      answers: [
        {
          text: "성도들이 삶으로 드리는 예배와",
          includes: ["성도들이 삶으로 드리는"],
        },
        {
          text: "성도들이 함께 모여서 드리는 예배가 있습니다.",
          includes: ["성도들이 함께 모여서 드리는"],
        },
      ],
    },
  ],
};

// 제8장: 공적 예배는 어떻게 드려야 합니까?
answerSheet[7] = {
  chapter: 8,
  title: "공적 예배는 어떻게 드려야 합니까?",
  questions: [
    {
      question: "예배 시간은 무엇을 하는 시간입니까?",
      necessary: true,
      answers: [
        {
          text: "하나님께 경배와 찬양과 기도와 헌금을 드리고",
          includes: ["경배와 찬양과 기도와 헌금을 드리고"],
        },
        {
          text: "하나님으로부터 말씀과 은혜와 응답과 복을 받고",
          includes: ["말씀과 은혜와 응답과 복을 받고"],
        },
        {
          text: "성령으로 교통하는 시간입니다.",
          includes: ["성령으로 교통"],
        },
      ],
    },
    {
      question: "예배의 참석은 언제부터 언제까지 해야합니까?",
      necessary: false,
      answers: [
        {
          text: "개회로부터 시작하여 축도(축복기도)까지 해야 합니다.",
          includes: ["개회로부터", "축도", "까지"],
        },
      ],
    },
    {
      question: "우리는 왜 주일을 지키게 됩니까?",
      necessary: false,
      answers: [
        {
          text: "구약시대에는 창조를 기준으로 안식일을 지켜왔으나",
          includes: ["구약시대에는 창조를 기준으로 안식일"],
        },
        {
          text: "신약시대에는 부활을 기준으로 주일을 지킵니다.",
          includes: ["신약시대에는 부활을 기준으로 주일"],
        },
      ],
    },
    {
      question: "주일은 어떻게 지켜야 합니까?",
      necessary: true,
      answers: [
        {
          text: "예배를 드리고 선한 일을 하면서 거룩하게 지켜야 합니다",
          includes: ["예배", "선한 일", "거룩"],
          verses: [{ from: "사 58:13-14" }],
        },
      ],
    },
    {
      question: "주일을 거룩하게 지키는 방법은 무엇입니까?",
      necessary: true,
      answers: [
        {
          text: "먼저 육신의 모든 사업을 정돈하고 평소에 미리 준비해야 합니다.",
          includes: ["육신의", "사업을 정돈", "평소에 미리 준비"],
        },
      ],
    },
    {
      question: "찬송은 어떻게 불러야 합니까?",
      necessary: false,
      answers: [
        {
          text: "정성된 마음으로 곡조에 맞게 불러야 합니다.",
          includes: ["정성된 마음", "곡조에 맞게"],
        },
      ],
    },
    {
      question: "헌금은 무엇입니까?",
      necessary: false,
      answers: [
        {
          text: "예배시간에 성도가 받은 물질을 하나님께 바치는 일입니다.",
          includes: ["예배시간에", "받은 물질을 하나님께 바치는 일"],
        },
      ],
    },
    {
      question: "헌금할 때 주의할 것은 무엇입니까?",
      necessary: true,
      answers: [
        {
          text: "인색한 마음이나 억지로 드릴 것이 아니고",
          includes: ["인색한 마음", "억지로 드릴 것이 아니고"],
        },
        {
          text: "감사와 자원하는 마음으로 즐겨 바쳐야 할 것입니다",
          includes: ["감사와 자원하는 마음", "즐겨 바쳐야"],
          verses: [{ from: "고후 9:7" }],
        },
      ],
    },
    {
      question: "기도는 누구에게 합니까?",
      necessary: false,
      answers: [
        {
          text: "하나님께 합니다.",
          includes: ["하나님"],
        },
      ],
    },
    {
      question: "기도는 누구의 이름으로 해야 합니까?",
      necessary: false,
      answers: [
        {
          text: "예수님의 이름으로 해야 합니다",
          includes: ["예수님"],
          verses: [
            {
              from: "요 14:14",
              text: "내 이름으로 무엇이든지 내게 구하면 내가 행하리라",
            },
          ],
        },
      ],
    },
  ],
};

// 제9장: 성도의 생활은 어떤 것입니까?
answerSheet[8] = {
  chapter: 9,
  title: "성도의 생활은 어떤 것입니까?",
  questions: [
    {
      question: "교인은 세상에서 어떻게 살아가야 합니까?",
      necessary: true,
      answers: [
        {
          text: "성경대로 살기 위해 성경을 힘써 배워야 하며",
          includes: ["성경을 힘써 배워야"],
        },
        {
          text: "예수님의 가르침을 생활 속에 실천해야 합니다.",
          includes: ["생활 속에 실천"],
        },
      ],
    },
    {
      question: "누가 복을 받을 수 있습니까?",
      necessary: false,
      answers: [
        {
          text: "성경을 읽고 듣고 지키는 자입니다",
          includes: ["성경을 읽고 듣고 지키는 자"],
          verses: [
            {
              from: "계 1:3",
            },
          ],
        },
      ],
    },
    {
      question: "환난과 핍박을 받아도 예수를 믿겠습니까?",
      necessary: false,
      answers: [
        {
          text: "끝까지 낙심하지 않고 주님만을 믿고 따르겠습니다.",
          includes: ["끝까지 낙심하지 않고 주님만을 믿고 따르겠습니다."],
        },
      ],
    },
  ],
};

// 제10장: 주기도문과 사도신경을 외워 보십시오.
answerSheet[9] = {
  chapter: 10,
  title: "주기도문과 사도신경을 외워 보십시오.",
  questions: [
    {
      question: "'주기도문'을 외워 보십시오. (개역개정 기준)",
      necessary: true,
      answers: [
        {
          text: "하늘에 계신 우리 아버지여, 이름이 거룩히 여김을 받으시오며, 나라가 임하시오며, 뜻이 하늘에서 이루어진 것같이 땅에서도 이루어지이다. 오늘 우리에게 일용할 양식을 주시옵고, 우리가 우리에게 죄지은 자를 사하여 준 것같이 우리 죄를 사하여 주시옵고, 우리를 시험에 들게 하지 마시옵고, 다만 악에서 구하시옵소서. 나라와 권세와 영광이 아버지께 영원히 있사옵나이다. 아멘.",
          includes: [],
        },
      ],
    },
    {
      question: "'사도신경'을 외워 보십시오. (구번역 기준)",
      necessary: true,
      answers: [
        {
          text: "전능하사 천지를 만드신 하나님 아버지를 내가 믿사오며, 그 외아들 우리 주 예수 그리스도를 믿사오니, 이는 성령으로 잉태하사 동정녀 마리아에게 나시고, 본디오 빌라도에게 고난을 받으사, 십자가에 못 박혀 죽으시고, 장사한 지 사흘 만에 죽은 자 가운데서 다시 살아나시며, 하늘에 오르사, 전능하신 하나님 우편에 앉아 계시다가, 저리로서 산 자와 죽은 자를 심판하러 오시리라. 성령을 믿사오며, 거룩한 공회와 성도가 서로 교통하는 것과 죄를 사하여 주시는 것과 몸이 다시 사는 것과 영원히 사는 것을 믿사옵나이다. 아멘.",
          includes: [],
        },
      ],
    },
  ],
};

// answerSheet 바탕으로 순서대로 챕터와 questionIndex를 저장한다
export const answerIndices: IndexInfo[] = [];
let questionCount = 0;
for (let chapter = 1; chapter <= answerSheet.length; chapter++) {
  for (
    let questionIndex = 0;
    questionIndex < answerSheet[chapter - 1].questions.length;
    questionIndex++
  ) {
    answerIndices[questionCount++] = { chapter, questionIndex };
  }
}

export function getIndexByChapterAndQNumber(chapter: number, qnum: number) {
  let index = -1;

  for (let i = 0; i < answerIndices.length; i++) {
    if (
      answerIndices[i].chapter === chapter &&
      answerIndices[i].questionIndex === qnum
    ) {
      index = i;
      break;
    }
  }

  return index;
}
