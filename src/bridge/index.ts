import CharactersCount from "./models/CharactersCount";
import CaptionDisplay from "./components/CaptionDisplay";
import SimpleDisplay from "./components/SimpleDisplay";
import Draft from "./models/Draft";

const title = "채식주의자";
const auther = "한강";
const content = [
  "영혜는 어느 날 갑자기 고기를 먹지 않겠다고 선언하며, 냉장고의 모든 고기를 버린다.",
  "반복되는 끔찍한 꿈과 폭력적인 이미지에 시달리던 영혜는 점차 식물이 되어가는 환상에 빠진다.",
  "영혜의 변화를 이해하지 못하는 가족들은 그녀를 정신병원에 입원시키지만, 그녀는 더욱 식물성에 가까워진다.",
  "영혜의 형부는 그녀의 몸에 그린 꽃무늬에 강박적으로 집착하게 되면서 예술과 욕망, 그리고 파멸의 경계를 넘나든다.",
  "결국 영혜는 나무가 되어 태양만 있으면 살 수 있다고 믿으며, 완전한 식물이 되기를 갈망한다.",
];

const draft = new CharactersCount(title, auther, content);

const simPleDisplay = new SimpleDisplay();

const captionDisplay = new CaptionDisplay();

draft.print(simPleDisplay);

draft.print(captionDisplay);

draft.charactersCount();
