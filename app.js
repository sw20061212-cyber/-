const categories = [
  { id: "all", name: "전체" },
  { id: "fresh", name: "신선" },
  { id: "staple", name: "기본" },
  { id: "frozen", name: "냉동" }
];

const ingredients = [
  { id: "egg", name: "계란", icon: "🥚", category: "fresh" },
  { id: "potato", name: "감자", icon: "🥔", category: "fresh" },
  { id: "onion", name: "양파", icon: "🧅", category: "fresh" },
  { id: "scallion", name: "대파", icon: "🌿", category: "fresh" },
  { id: "mushroom", name: "버섯", icon: "🍄", category: "fresh" },
  { id: "cabbage", name: "양배추", icon: "🥬", category: "fresh" },
  { id: "tofu", name: "두부", icon: "🍲", category: "fresh" },
  { id: "ham", name: "햄", icon: "🥓", category: "staple" },
  { id: "cheese", name: "치즈", icon: "🧀", category: "staple" },
  { id: "rice", name: "밥", icon: "🍚", category: "staple" },
  { id: "kimchi", name: "김치", icon: "🌶️", category: "staple" },
  { id: "tuna", name: "참치캔", icon: "🥫", category: "staple" },
  { id: "milk", name: "우유", icon: "🥛", category: "staple" },
  { id: "ramyun", name: "라면", icon: "🍜", category: "staple" },
  { id: "frozenMandu", name: "냉동만두", icon: "🥟", category: "frozen" },
  { id: "frozenShrimp", name: "냉동새우", icon: "🍤", category: "frozen" },
  { id: "frozenFriedRice", name: "냉동볶음밥", icon: "🍛", category: "frozen" },
  { id: "chickenNugget", name: "치킨너겟", icon: "🍗", category: "frozen" },
  { id: "riceCake", name: "떡볶이떡", icon: "🍡", category: "frozen" },
  { id: "fishCake", name: "어묵", icon: "🍢", category: "frozen" },
  { id: "udon", name: "우동면", icon: "🍜", category: "frozen" }
];

categories.splice(
  0,
  categories.length,
  { id: "all", name: "전체" },
  { id: "vegetable", name: "채소" },
  { id: "fruit", name: "과일" },
  { id: "protein", name: "육류/단백질" },
  { id: "seafood", name: "해산물" },
  { id: "grain", name: "밥/면/빵" },
  { id: "dairy", name: "유제품" },
  { id: "sauce", name: "양념" },
  { id: "canned", name: "캔/가공" },
  { id: "frozen", name: "냉동" },
  { id: "delivery", name: "남은 배달" },
  { id: "pantry", name: "기타" }
);

ingredients.splice(
  0,
  ingredients.length,
  { id: "egg", name: "계란", icon: "🥚", category: "protein" },
  { id: "tofu", name: "두부", icon: "🍲", category: "protein" },
  { id: "chickenBreast", name: "닭가슴살", icon: "🍗", category: "protein" },
  { id: "chickenThigh", name: "닭다리살", icon: "🍗", category: "protein" },
  { id: "porkBelly", name: "삼겹살", icon: "🥓", category: "protein" },
  { id: "pork", name: "돼지고기", icon: "🍖", category: "protein" },
  { id: "beef", name: "소고기", icon: "🥩", category: "protein" },
  { id: "mincedMeat", name: "다진 고기", icon: "🥩", category: "protein" },
  { id: "sausage", name: "소시지", icon: "🌭", category: "protein" },
  { id: "ham", name: "햄", icon: "🥓", category: "protein" },
  { id: "bacon", name: "베이컨", icon: "🥓", category: "protein" },
  { id: "fish", name: "생선살", icon: "🐟", category: "protein" },
  { id: "potato", name: "감자", icon: "🥔", category: "vegetable" },
  { id: "sweetPotato", name: "고구마", icon: "🍠", category: "vegetable" },
  { id: "onion", name: "양파", icon: "🧅", category: "vegetable" },
  { id: "scallion", name: "대파", icon: "🌿", category: "vegetable" },
  { id: "garlic", name: "마늘", icon: "🧄", category: "vegetable" },
  { id: "carrot", name: "당근", icon: "🥕", category: "vegetable" },
  { id: "cabbage", name: "양배추", icon: "🥬", category: "vegetable" },
  { id: "napaCabbage", name: "배추", icon: "🥬", category: "vegetable" },
  { id: "lettuce", name: "상추", icon: "🥬", category: "vegetable" },
  { id: "perillaLeaf", name: "깻잎", icon: "🌿", category: "vegetable" },
  { id: "spinach", name: "시금치", icon: "🥬", category: "vegetable" },
  { id: "beanSprout", name: "콩나물", icon: "🌱", category: "vegetable" },
  { id: "zucchini", name: "애호박", icon: "🥒", category: "vegetable" },
  { id: "cucumber", name: "오이", icon: "🥒", category: "vegetable" },
  { id: "greenPepper", name: "고추", icon: "🌶️", category: "vegetable" },
  { id: "bellPepper", name: "파프리카", icon: "🫑", category: "vegetable" },
  { id: "broccoli", name: "브로콜리", icon: "🥦", category: "vegetable" },
  { id: "mushroom", name: "버섯", icon: "🍄", category: "vegetable" },
  { id: "shiitake", name: "표고버섯", icon: "🍄", category: "vegetable" },
  { id: "enoki", name: "팽이버섯", icon: "🍄", category: "vegetable" },
  { id: "corn", name: "옥수수", icon: "🌽", category: "vegetable" },
  { id: "tomato", name: "토마토", icon: "🍅", category: "vegetable" },
  { id: "cherryTomato", name: "방울토마토", icon: "🍅", category: "vegetable" },
  { id: "radish", name: "무", icon: "🥗", category: "vegetable" },
  { id: "lotusRoot", name: "연근", icon: "🥔", category: "vegetable" },
  { id: "apple", name: "사과", icon: "🍎", category: "fruit" },
  { id: "banana", name: "바나나", icon: "🍌", category: "fruit" },
  { id: "orange", name: "오렌지", icon: "🍊", category: "fruit" },
  { id: "lemon", name: "레몬", icon: "🍋", category: "fruit" },
  { id: "avocado", name: "아보카도", icon: "🥑", category: "fruit" },
  { id: "rice", name: "밥", icon: "🍚", category: "grain" },
  { id: "instantRice", name: "즉석밥", icon: "🍚", category: "grain" },
  { id: "brownRice", name: "현미밥", icon: "🍚", category: "grain" },
  { id: "bread", name: "식빵", icon: "🍞", category: "grain" },
  { id: "bagel", name: "베이글", icon: "🥯", category: "grain" },
  { id: "tortilla", name: "또띠아", icon: "🫓", category: "grain" },
  { id: "pasta", name: "파스타면", icon: "🍝", category: "grain" },
  { id: "spaghetti", name: "스파게티면", icon: "🍝", category: "grain" },
  { id: "udon", name: "우동면", icon: "🍜", category: "grain" },
  { id: "somen", name: "소면", icon: "🍜", category: "grain" },
  { id: "ramyun", name: "라면", icon: "🍜", category: "grain" },
  { id: "riceNoodle", name: "쌀국수면", icon: "🍜", category: "grain" },
  { id: "riceCake", name: "떡볶이떡", icon: "🍡", category: "grain" },
  { id: "flour", name: "밀가루", icon: "🥞", category: "grain" },
  { id: "seaweed", name: "김", icon: "🍙", category: "seafood" },
  { id: "shrimp", name: "새우", icon: "🍤", category: "seafood" },
  { id: "frozenShrimp", name: "냉동새우", icon: "🍤", category: "seafood" },
  { id: "squid", name: "오징어", icon: "🦑", category: "seafood" },
  { id: "octopus", name: "문어", icon: "🐙", category: "seafood" },
  { id: "clam", name: "바지락", icon: "🦪", category: "seafood" },
  { id: "mussel", name: "홍합", icon: "🦪", category: "seafood" },
  { id: "crab", name: "게살", icon: "🦀", category: "seafood" },
  { id: "fishCake", name: "어묵", icon: "🍢", category: "seafood" },
  { id: "anchovy", name: "멸치", icon: "🐟", category: "seafood" },
  { id: "cheese", name: "치즈", icon: "🧀", category: "dairy" },
  { id: "milk", name: "우유", icon: "🥛", category: "dairy" },
  { id: "butter", name: "버터", icon: "🧈", category: "dairy" },
  { id: "yogurt", name: "요거트", icon: "🥛", category: "dairy" },
  { id: "cream", name: "생크림", icon: "🥛", category: "dairy" },
  { id: "mozzarella", name: "모짜렐라", icon: "🧀", category: "dairy" },
  { id: "kimchi", name: "김치", icon: "🥬", category: "pantry" },
  { id: "tuna", name: "참치캔", icon: "🥫", category: "canned" },
  { id: "spam", name: "스팸", icon: "🥫", category: "canned" },
  { id: "cannedCorn", name: "옥수수캔", icon: "🥫", category: "canned" },
  { id: "cannedBean", name: "콩통조림", icon: "🥫", category: "canned" },
  { id: "tomatoSauce", name: "토마토소스", icon: "🍅", category: "canned" },
  { id: "curry", name: "카레", icon: "🍛", category: "pantry" },
  { id: "mayo", name: "마요네즈", icon: "🧴", category: "sauce" },
  { id: "ketchup", name: "케첩", icon: "🍅", category: "sauce" },
  { id: "soySauce", name: "간장", icon: "🧂", category: "sauce" },
  { id: "gochujang", name: "고추장", icon: "🌶️", category: "sauce" },
  { id: "doenjang", name: "된장", icon: "🍲", category: "sauce" },
  { id: "ssamjang", name: "쌈장", icon: "🌶️", category: "sauce" },
  { id: "sesameOil", name: "참기름", icon: "🫙", category: "sauce" },
  { id: "oliveOil", name: "올리브오일", icon: "🫒", category: "sauce" },
  { id: "vinegar", name: "식초", icon: "🧴", category: "sauce" },
  { id: "sugar", name: "설탕", icon: "🧂", category: "sauce" },
  { id: "salt", name: "소금", icon: "🧂", category: "sauce" },
  { id: "pepper", name: "후추", icon: "🧂", category: "sauce" },
  { id: "chiliFlake", name: "고춧가루", icon: "🌶️", category: "sauce" },
  { id: "mustard", name: "머스터드", icon: "🌭", category: "sauce" },
  { id: "frozenMandu", name: "냉동만두", icon: "🥟", category: "frozen" },
  { id: "frozenFriedRice", name: "냉동볶음밥", icon: "🍛", category: "frozen" },
  { id: "chickenNugget", name: "치킨너겟", icon: "🍗", category: "frozen" },
  { id: "frozenPizza", name: "냉동피자", icon: "🍕", category: "frozen" },
  { id: "frozenHotdog", name: "핫도그", icon: "🌭", category: "frozen" },
  { id: "frozenKatsu", name: "돈까스", icon: "🍖", category: "frozen" },
  { id: "frozenCutlet", name: "치킨까스", icon: "🍗", category: "frozen" },
  { id: "frozenTteokbokki", name: "냉동떡볶이", icon: "🍲", category: "frozen" },
  { id: "frozenUdon", name: "냉동우동", icon: "🍜", category: "frozen" },
  { id: "frozenVegetable", name: "냉동야채", icon: "🥦", category: "frozen" },
  { id: "frozenCorn", name: "냉동옥수수", icon: "🌽", category: "frozen" },
  { id: "frozenBerry", name: "냉동베리", icon: "🫐", category: "frozen" },
  { id: "leftoverChicken", name: "남은 치킨", icon: "🍗", category: "delivery" },
  { id: "leftoverPizza", name: "남은 피자", icon: "🍕", category: "delivery" },
  { id: "leftoverJokbal", name: "남은 족발", icon: "🍖", category: "delivery" },
  { id: "leftoverBossam", name: "남은 보쌈", icon: "🥩", category: "delivery" },
  { id: "leftoverTteokbokki", name: "남은 떡볶이", icon: "🍲", category: "delivery" },
  { id: "leftoverJjajang", name: "남은 짜장", icon: "🍜", category: "delivery" },
  { id: "leftoverJjamppong", name: "남은 짬뽕", icon: "🍜", category: "delivery" },
  { id: "leftoverTangSuyuk", name: "남은 탕수육", icon: "🍖", category: "delivery" },
  { id: "leftoverGimbap", name: "남은 김밥", icon: "🍙", category: "delivery" },
  { id: "leftoverSushi", name: "남은 초밥", icon: "🍣", category: "delivery" },
  { id: "leftoverDonkatsu", name: "남은 돈까스", icon: "🍖", category: "delivery" },
  { id: "leftoverPasta", name: "남은 파스타", icon: "🍝", category: "delivery" },
  { id: "leftoverBurger", name: "남은 햄버거", icon: "🍔", category: "delivery" },
  { id: "leftoverFries", name: "남은 감자튀김", icon: "🍟", category: "delivery" },
  { id: "leftoverRice", name: "배달 공깃밥", icon: "🍚", category: "delivery" },
  { id: "leftoverKimchiStew", name: "남은 김치찌개", icon: "🍲", category: "delivery" },
  { id: "leftoverSoup", name: "남은 국물", icon: "🍜", category: "delivery" },
  { id: "pickle", name: "피클", icon: "🥒", category: "delivery" },
  { id: "nuts", name: "견과류", icon: "🥜", category: "pantry" },
  { id: "sesame", name: "깨", icon: "🌰", category: "pantry" },
  { id: "honey", name: "꿀", icon: "🍯", category: "pantry" },
  { id: "cereal", name: "시리얼", icon: "🥣", category: "pantry" },
  { id: "oatmeal", name: "오트밀", icon: "🥣", category: "pantry" },
  { id: "dumplingWrapper", name: "만두피", icon: "🥟", category: "pantry" },
  { id: "eggplant", name: "가지", icon: "🍆", category: "vegetable" },
  { id: "peanutButter", name: "땅콩버터", icon: "🥜", category: "pantry" },
  { id: "jam", name: "잼", icon: "🍓", category: "pantry" }
);

const ingredientIconOverrides = {
  tofu: "🍲",
  chickenBreast: "🍗",
  chickenThigh: "🍗",
  porkBelly: "🥓",
  pork: "🍖",
  beef: "🥩",
  mincedMeat: "🥩",
  fish: "🐟",
  cabbage: "🥬",
  napaCabbage: "🥬",
  lettuce: "🥬",
  perillaLeaf: "🌿",
  spinach: "🥬",
  beanSprout: "🌱",
  zucchini: "🥒",
  radish: "🥕",
  lotusRoot: "🪷",
  bagel: "🥯",
  tortilla: "🫓",
  flour: "🌾",
  seaweed: "🍙",
  clam: "🦪",
  mussel: "🦪",
  crab: "🦀",
  anchovy: "🐟",
  yogurt: "🥣",
  cream: "🥛",
  kimchi: "🥬",
  tuna: "🥫",
  spam: "🥫",
  cannedCorn: "🌽",
  cannedBean: "🫘",
  tomatoSauce: "🍅",
  mayo: "🫙",
  ketchup: "🍅",
  soySauce: "🫙",
  gochujang: "🌶️",
  doenjang: "🫙",
  ssamjang: "🫙",
  sesameOil: "🫙",
  oliveOil: "🫒",
  vinegar: "🫙",
  sugar: "🧂",
  salt: "🧂",
  pepper: "🧂",
  chiliFlake: "🌶️",
  frozenTteokbokki: "🍲",
  frozenUdon: "🍜",
  leftoverBossam: "🍖",
  leftoverTteokbokki: "🍲",
  leftoverJjajang: "🍜",
  leftoverJjamppong: "🍜",
  leftoverTangSuyuk: "🍖",
  leftoverGimbap: "🍙",
  leftoverDonkatsu: "🍖",
  leftoverKimchiStew: "🍲",
  leftoverSoup: "🍜",
  pickle: "🥒",
  sesame: "🌰",
  oatmeal: "🥣",
  dumplingWrapper: "🥟",
  jam: "🍓"
};

ingredients.forEach((ingredient) => {
  if (ingredientIconOverrides[ingredient.id]) {
    ingredient.icon = ingredientIconOverrides[ingredient.id];
  }
});

function loadJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const storedCustomIngredients = loadJSON("customIngredients", []);
storedCustomIngredients.forEach((ingredient) => {
  if (!ingredients.some((item) => item.id === ingredient.id)) {
    ingredients.push(ingredient);
  }
});

const recipes = [
  {
    id: "kimchi-fried-rice",
    title: "김치볶음밥",
    icon: "🍳",
    description: "밥과 김치만 있어도 든든하게 만들 수 있는 기본 냉장고 요리.",
    required: ["rice", "kimchi"],
    optional: ["egg", "ham", "scallion", "cheese"],
    time: "15분",
    difficulty: "쉬움",
    steps: [
      "김치를 먹기 좋은 크기로 썰고 팬에 기름을 두릅니다.",
      "김치를 먼저 볶다가 밥을 넣고 고르게 섞습니다.",
      "햄이나 대파가 있으면 함께 넣어 향을 더합니다.",
      "간을 맞춘 뒤 계란 프라이나 치즈를 올려 마무리합니다."
    ]
  },
  {
    id: "egg-rice",
    title: "간장계란밥",
    icon: "🥚",
    description: "바쁜 날에도 빠르게 먹기 좋은 5분 한 그릇.",
    required: ["rice", "egg"],
    optional: ["scallion", "cheese"],
    time: "5분",
    difficulty: "매우 쉬움",
    steps: [
      "따뜻한 밥을 그릇에 담습니다.",
      "계란을 반숙으로 익혀 밥 위에 올립니다.",
      "간장과 참기름을 조금 넣고 비빕니다.",
      "대파나 치즈가 있으면 취향에 맞게 곁들입니다."
    ]
  },
  {
    id: "potato-cheese",
    title: "감자치즈전",
    icon: "🧀",
    description: "감자를 얇게 부쳐 치즈를 녹여 먹는 고소한 간식.",
    required: ["potato", "cheese"],
    optional: ["onion", "ham"],
    time: "20분",
    difficulty: "보통",
    steps: [
      "감자를 채 썰고 물기를 가볍게 제거합니다.",
      "팬에 감자를 얇게 펼쳐 앞뒤로 노릇하게 굽습니다.",
      "치즈를 올리고 약한 불에서 녹입니다.",
      "양파나 햄을 넣으면 더 든든한 한 끼가 됩니다."
    ]
  },
  {
    id: "ham-omelet",
    title: "햄치즈 오믈렛",
    icon: "🥓",
    description: "계란, 햄, 치즈를 넣어 부드럽게 접어내는 아침 메뉴.",
    required: ["egg", "ham", "cheese"],
    optional: ["onion", "mushroom", "milk"],
    time: "12분",
    difficulty: "보통",
    steps: [
      "계란을 풀고 우유가 있으면 한 숟가락 넣습니다.",
      "햄과 양파를 잘게 썰어 팬에 살짝 볶습니다.",
      "계란물을 붓고 치즈를 올린 뒤 반으로 접습니다.",
      "속이 촉촉할 때 불을 끄고 접시에 담습니다."
    ]
  },
  {
    id: "kimchi-tofu",
    title: "김치두부 덮밥",
    icon: "🍲",
    description: "김치와 두부를 매콤하게 볶아 밥 위에 올리는 가벼운 식사.",
    required: ["kimchi", "tofu", "rice"],
    optional: ["egg", "scallion", "onion"],
    time: "18분",
    difficulty: "쉬움",
    steps: [
      "두부는 큼직하게 썰고 김치는 잘게 썹니다.",
      "팬에 김치와 양파를 볶아 향을 냅니다.",
      "두부를 넣고 부서지지 않게 살살 섞습니다.",
      "밥 위에 올리고 계란이나 대파를 더해 마무리합니다."
    ]
  },
  {
    id: "tuna-mayo",
    title: "참치마요덮밥",
    icon: "🍚",
    description: "밥 위에 참치와 계란을 올려 간단히 완성하는 자취 인기 메뉴.",
    required: ["rice", "tuna", "egg"],
    optional: ["onion", "cheese"],
    time: "10분",
    difficulty: "쉬움",
    steps: [
      "참치 기름을 빼고 양파가 있으면 잘게 다집니다.",
      "계란은 스크램블로 부드럽게 익힙니다.",
      "밥 위에 참치와 계란을 올립니다.",
      "마요네즈와 간장을 조금 뿌려 섞어 먹습니다."
    ]
  },
  {
    id: "mandu-guk",
    title: "초간단 만둣국",
    icon: "🥟",
    description: "냉동만두와 계란으로 빠르게 끓이는 따뜻한 국물 요리.",
    required: ["frozenMandu", "egg"],
    optional: ["scallion", "riceCake", "fishCake"],
    time: "15분",
    difficulty: "쉬움",
    steps: [
      "냄비에 물이나 육수를 끓이고 냉동만두를 넣습니다.",
      "만두가 떠오르면 계란을 풀어 천천히 둘러 넣습니다.",
      "대파, 어묵, 떡이 있으면 함께 넣어 더 든든하게 끓입니다.",
      "간장이나 소금으로 간을 맞춘 뒤 따뜻하게 담습니다."
    ]
  },
  {
    id: "bibim-mandu",
    title: "비빔만두",
    icon: "🥗",
    description: "바삭하게 구운 냉동만두에 양배추와 매콤한 소스를 곁들이는 메뉴.",
    required: ["frozenMandu", "cabbage"],
    optional: ["onion", "scallion", "kimchi"],
    time: "18분",
    difficulty: "보통",
    steps: [
      "냉동만두를 팬이나 에어프라이어로 바삭하게 굽습니다.",
      "양배추와 양파를 얇게 썰어 차갑게 준비합니다.",
      "고추장, 식초, 설탕, 간장을 섞어 새콤달콤한 소스를 만듭니다.",
      "채소에 소스를 버무리고 만두와 함께 담습니다."
    ]
  },
  {
    id: "mandu-fried-rice",
    title: "만두 볶음밥",
    icon: "🍛",
    description: "냉동만두를 잘게 부숴 밥과 볶는 든든한 한 팬 요리.",
    required: ["frozenMandu", "rice"],
    optional: ["egg", "scallion", "kimchi", "onion"],
    time: "14분",
    difficulty: "쉬움",
    steps: [
      "냉동만두를 노릇하게 굽고 가위나 주걱으로 잘게 나눕니다.",
      "밥을 넣고 만두 속과 고르게 섞이도록 볶습니다.",
      "계란이나 김치가 있으면 함께 넣어 맛을 더합니다.",
      "대파를 넣어 향을 살리고 불을 끕니다."
    ]
  },
  {
    id: "shrimp-cheese-rice",
    title: "새우치즈 볶음밥",
    icon: "🍤",
    description: "냉동새우와 치즈를 더해 냉동볶음밥을 업그레이드하는 메뉴.",
    required: ["frozenShrimp", "rice"],
    optional: ["cheese", "egg", "onion", "frozenFriedRice"],
    time: "13분",
    difficulty: "쉬움",
    steps: [
      "냉동새우를 팬에서 먼저 익혀 수분을 날립니다.",
      "밥이나 냉동볶음밥을 넣고 센 불에서 볶습니다.",
      "양파나 계란을 더하면 식감과 고소함이 살아납니다.",
      "마지막에 치즈를 올려 녹인 뒤 바로 먹습니다."
    ]
  },
  {
    id: "nugget-rice-bowl",
    title: "너겟마요덮밥",
    icon: "🍗",
    description: "치킨너겟을 바삭하게 데워 밥 위에 올리는 간단 덮밥.",
    required: ["chickenNugget", "rice"],
    optional: ["egg", "onion", "cheese"],
    time: "12분",
    difficulty: "쉬움",
    steps: [
      "치킨너겟을 에어프라이어나 팬에서 바삭하게 데웁니다.",
      "계란이 있으면 스크램블로 익혀 밥 위에 올립니다.",
      "너겟을 먹기 좋은 크기로 잘라 밥 위에 얹습니다.",
      "마요네즈와 간장을 살짝 뿌려 덮밥처럼 비벼 먹습니다."
    ]
  },
  {
    id: "tteok-mandu-ramyun",
    title: "떡만두 라면",
    icon: "🍜",
    description: "라면에 냉동만두와 떡을 넣어 한 그릇으로 든든하게 만드는 메뉴.",
    required: ["ramyun", "frozenMandu"],
    optional: ["riceCake", "egg", "scallion", "fishCake"],
    time: "10분",
    difficulty: "매우 쉬움",
    steps: [
      "라면 물을 끓이고 스프와 면을 넣습니다.",
      "냉동만두와 떡을 함께 넣어 속까지 익힙니다.",
      "계란을 넣고 대파를 올려 향을 더합니다.",
      "만두가 충분히 익으면 그릇에 담습니다."
    ]
  },
  {
    id: "fishcake-udon",
    title: "어묵 우동",
    icon: "🍢",
    description: "냉동 우동면과 어묵으로 빠르게 만드는 따뜻한 면 요리.",
    required: ["udon", "fishCake"],
    optional: ["egg", "scallion", "frozenMandu"],
    time: "12분",
    difficulty: "쉬움",
    steps: [
      "냄비에 물을 끓이고 우동면과 어묵을 넣습니다.",
      "간장이나 국물 스프로 간을 맞춥니다.",
      "계란이나 냉동만두를 넣으면 더 든든해집니다.",
      "대파를 올리고 뜨겁게 담아냅니다."
    ]
  },
  {
    id: "kimchi-cheese-rice",
    title: "치즈김치 볶음밥",
    icon: "🧀",
    description: "매콤한 김치볶음밥에 치즈를 녹여 부드럽게 먹는 메뉴.",
    required: ["rice", "kimchi", "cheese"],
    optional: ["egg", "ham", "scallion"],
    time: "16분",
    difficulty: "쉬움",
    steps: [
      "김치와 밥을 센 불에서 먼저 볶아 수분을 날립니다.",
      "햄이나 대파가 있으면 함께 넣어 풍미를 더합니다.",
      "볶음밥 위에 치즈를 올리고 약한 불에서 녹입니다.",
      "계란 프라이를 곁들이면 한 그릇 식사로 충분합니다."
    ]
  },
  {
    id: "shrimp-kimchi-rice",
    title: "새우김치 볶음밥",
    icon: "🍤",
    description: "냉동새우와 김치가 만나 감칠맛이 강한 볶음밥.",
    required: ["frozenShrimp", "kimchi", "rice"],
    optional: ["egg", "scallion", "onion"],
    time: "17분",
    difficulty: "보통",
    steps: [
      "냉동새우를 팬에 먼저 볶아 물기를 날립니다.",
      "김치를 넣고 신맛이 부드러워질 때까지 볶습니다.",
      "밥을 넣어 고슬고슬하게 섞고 간을 맞춥니다.",
      "계란과 대파를 더해 마무리합니다."
    ]
  },
  {
    id: "mandu-tteokbokki",
    title: "만두 떡볶이",
    icon: "🥟",
    description: "떡볶이에 냉동만두를 넣어 간식과 식사를 동시에 해결하는 메뉴.",
    required: ["frozenMandu", "riceCake"],
    optional: ["fishCake", "scallion", "egg", "cheese"],
    time: "18분",
    difficulty: "보통",
    steps: [
      "팬에 물과 고추장 양념을 넣고 끓입니다.",
      "떡과 어묵을 먼저 넣어 말랑해질 때까지 익힙니다.",
      "냉동만두를 넣고 터지지 않게 살살 끓입니다.",
      "치즈나 삶은 계란을 더하면 더 든든합니다."
    ]
  },
  {
    id: "nugget-cheese-potato",
    title: "너겟 감자치즈 플레이트",
    icon: "🍗",
    description: "치킨너겟, 감자, 치즈를 한 접시에 담는 간단한 간식 플레이트.",
    required: ["chickenNugget", "potato", "cheese"],
    optional: ["onion", "cabbage"],
    time: "22분",
    difficulty: "쉬움",
    steps: [
      "감자를 얇게 썰어 팬이나 에어프라이어에서 익힙니다.",
      "치킨너겟을 바삭하게 데웁니다.",
      "감자 위에 치즈를 올려 녹인 뒤 너겟과 함께 담습니다.",
      "양배추가 있으면 곁들여 느끼함을 줄입니다."
    ]
  },
  {
    id: "tofu-kimchi-plate",
    title: "두부김치",
    icon: "🍲",
    description: "따뜻한 두부와 볶은 김치를 함께 먹는 담백한 반찬 겸 한 끼.",
    required: ["tofu", "kimchi"],
    optional: ["onion", "scallion", "rice"],
    time: "14분",
    difficulty: "쉬움",
    steps: [
      "두부를 끓는 물에 데우거나 전자레인지로 따뜻하게 준비합니다.",
      "김치와 양파를 팬에 볶아 신맛을 줄입니다.",
      "대파를 넣어 향을 살리고 불을 끕니다.",
      "두부와 볶은 김치를 한 접시에 담습니다."
    ]
  },
  {
    id: "mushroom-egg-rice",
    title: "버섯계란 덮밥",
    icon: "🍄",
    description: "버섯과 계란을 부드럽게 익혀 밥 위에 올리는 가벼운 덮밥.",
    required: ["mushroom", "egg", "rice"],
    optional: ["onion", "scallion", "cheese"],
    time: "13분",
    difficulty: "쉬움",
    steps: [
      "버섯과 양파를 얇게 썰어 팬에 볶습니다.",
      "간장과 물을 조금 넣어 촉촉한 소스를 만듭니다.",
      "계란을 풀어 넣고 반쯤 익었을 때 불을 끕니다.",
      "밥 위에 올리고 대파를 뿌립니다."
    ]
  },
  {
    id: "frozen-fried-rice-upgrade",
    title: "냉동볶음밥 업그레이드",
    icon: "🍛",
    description: "냉동볶음밥에 계란, 치즈, 새우를 더해 완성도를 높이는 메뉴.",
    required: ["frozenFriedRice"],
    optional: ["egg", "cheese", "frozenShrimp", "scallion"],
    time: "8분",
    difficulty: "매우 쉬움",
    steps: [
      "냉동볶음밥을 팬에 넣고 센 불에서 고슬고슬하게 볶습니다.",
      "계란을 한쪽에서 스크램블로 익혀 섞습니다.",
      "냉동새우가 있으면 먼저 익혀 함께 볶습니다.",
      "치즈와 대파를 올려 마무리합니다."
    ]
  },
  {
    id: "leftover-chicken-mayo",
    title: "남은 치킨마요덮밥",
    icon: "🍗",
    description: "식은 치킨을 바삭하게 되살려 밥 위에 올리는 배달 음식 재활용 인기 메뉴.",
    required: ["leftoverChicken", "rice"],
    optional: ["egg", "onion", "mayo", "seaweed"],
    time: "12분",
    difficulty: "쉬움",
    steps: [
      "남은 치킨은 뼈를 제거하고 먹기 좋은 크기로 찢습니다.",
      "팬이나 에어프라이어로 치킨을 다시 데워 겉을 바삭하게 만듭니다.",
      "계란은 스크램블로 익히고 밥 위에 올립니다.",
      "치킨, 마요네즈, 김가루를 올려 덮밥처럼 비벼 먹습니다."
    ]
  },
  {
    id: "pizza-egg-toast",
    title: "남은 피자 에그토스트",
    icon: "🍕",
    description: "남은 피자를 잘게 잘라 식빵과 계란에 넣어 굽는 든든한 브런치.",
    required: ["leftoverPizza", "egg"],
    optional: ["bread", "cheese", "milk", "onion"],
    time: "14분",
    difficulty: "쉬움",
    steps: [
      "남은 피자를 작은 조각으로 자릅니다.",
      "계란을 풀고 우유가 있으면 조금 섞습니다.",
      "식빵 위에 피자 조각과 치즈를 올린 뒤 계란물을 둘러 굽습니다.",
      "겉이 노릇해지면 반으로 잘라 따뜻하게 먹습니다."
    ]
  },
  {
    id: "jokbal-fried-rice",
    title: "족발 볶음밥",
    icon: "🍖",
    description: "남은 족발의 쫄깃한 식감과 대파 향을 살린 고기 볶음밥.",
    required: ["leftoverJokbal", "rice"],
    optional: ["egg", "scallion", "kimchi", "soySauce"],
    time: "13분",
    difficulty: "쉬움",
    steps: [
      "족발은 잘게 썰어 팬에서 먼저 볶아 기름을 살립니다.",
      "대파와 김치가 있으면 함께 넣어 느끼함을 잡습니다.",
      "밥을 넣고 고르게 볶은 뒤 간장으로 간을 맞춥니다.",
      "계란 프라이를 올리면 한 끼로 충분합니다."
    ]
  },
  {
    id: "bossam-kimchi-stew",
    title: "보쌈 김치찌개",
    icon: "🥩",
    description: "남은 보쌈과 김치를 넣어 짧게 끓이는 진한 찌개.",
    required: ["leftoverBossam", "kimchi"],
    optional: ["tofu", "scallion", "onion", "rice"],
    time: "18분",
    difficulty: "보통",
    steps: [
      "김치를 냄비에서 먼저 볶아 신맛을 부드럽게 만듭니다.",
      "물 또는 남은 국물을 붓고 끓입니다.",
      "보쌈 고기와 두부를 넣어 5분 정도 더 끓입니다.",
      "대파를 올리고 밥과 함께 먹습니다."
    ]
  },
  {
    id: "tteokbokki-fried-rice",
    title: "떡볶이 볶음밥",
    icon: "🍲",
    description: "남은 떡볶이 양념에 밥과 김가루를 볶아 마무리하는 메뉴.",
    required: ["leftoverTteokbokki", "rice"],
    optional: ["cheese", "egg", "seaweed", "scallion"],
    time: "10분",
    difficulty: "매우 쉬움",
    steps: [
      "남은 떡볶이는 떡을 작게 자르고 양념을 팬에 넣습니다.",
      "밥을 넣어 양념이 골고루 배도록 볶습니다.",
      "치즈를 올려 녹이거나 계란을 곁들입니다.",
      "김가루와 대파를 뿌려 마무리합니다."
    ]
  },
  {
    id: "jjajang-omelet-rice",
    title: "짜장 오므라이스",
    icon: "🍜",
    description: "남은 짜장을 소스로 쓰고 계란을 덮어 만드는 빠른 오므라이스.",
    required: ["leftoverJjajang", "rice", "egg"],
    optional: ["onion", "ham", "frozenVegetable"],
    time: "15분",
    difficulty: "보통",
    steps: [
      "밥에 양파나 햄을 넣고 가볍게 볶습니다.",
      "계란을 넓게 부쳐 밥 위에 덮습니다.",
      "남은 짜장은 따로 데워 오므라이스 위에 붓습니다.",
      "후추를 살짝 뿌리면 느끼함이 줄어듭니다."
    ]
  },
  {
    id: "tangsuyuk-stir-fry",
    title: "탕수육 채소볶음",
    icon: "🍖",
    description: "남은 탕수육을 양파와 파프리카에 볶아 새 반찬처럼 살리는 메뉴.",
    required: ["leftoverTangSuyuk", "onion"],
    optional: ["bellPepper", "cabbage", "ketchup", "vinegar"],
    time: "12분",
    difficulty: "쉬움",
    steps: [
      "탕수육은 에어프라이어나 팬에서 먼저 바삭하게 데웁니다.",
      "양파와 파프리카를 팬에 볶습니다.",
      "탕수육과 남은 소스를 넣어 빠르게 섞습니다.",
      "소스가 없으면 케첩과 식초를 조금 섞어 새콤하게 맞춥니다."
    ]
  },
  {
    id: "gimbap-egg-pan",
    title: "김밥 계란부침",
    icon: "🍙",
    description: "냉장고에 들어간 김밥을 계란물에 적셔 부치는 오래된 인기 메뉴.",
    required: ["leftoverGimbap", "egg"],
    optional: ["cheese", "ketchup", "mayo"],
    time: "8분",
    difficulty: "매우 쉬움",
    steps: [
      "남은 김밥은 한입 크기 그대로 준비합니다.",
      "계란을 풀고 김밥을 앞뒤로 적십니다.",
      "팬에 기름을 두르고 약한 불에서 노릇하게 부칩니다.",
      "케첩이나 마요네즈를 곁들여 먹습니다."
    ]
  },
  {
    id: "jjamppong-udon",
    title: "짬뽕 우동",
    icon: "🍜",
    description: "남은 짬뽕 국물에 우동면을 넣어 다음 끼니로 바꾸는 면 요리.",
    required: ["leftoverJjamppong", "udon"],
    optional: ["egg", "scallion", "frozenMandu", "fishCake"],
    time: "9분",
    difficulty: "매우 쉬움",
    steps: [
      "남은 짬뽕 국물을 냄비에 붓고 끓입니다.",
      "우동면을 넣어 풀어지도록 익힙니다.",
      "만두나 어묵이 있으면 함께 넣어 양을 늘립니다.",
      "대파와 계란을 더해 마무리합니다."
    ]
  },
  {
    id: "donkatsu-katsudon",
    title: "돈까스 계란덮밥",
    icon: "🍖",
    description: "남은 돈까스를 계란과 양파에 살짝 졸여 밥 위에 올리는 덮밥.",
    required: ["leftoverDonkatsu", "rice", "egg"],
    optional: ["onion", "soySauce", "scallion"],
    time: "13분",
    difficulty: "보통",
    steps: [
      "돈까스는 먹기 좋은 크기로 자릅니다.",
      "팬에 양파, 물, 간장을 넣고 살짝 끓입니다.",
      "돈까스를 올리고 계란물을 둘러 반숙으로 익힙니다.",
      "밥 위에 그대로 올려 덮밥으로 먹습니다."
    ]
  },
  {
    id: "fries-cheese-omelet",
    title: "감자튀김 치즈오믈렛",
    icon: "🍟",
    description: "남은 감자튀김을 잘게 잘라 계란과 치즈로 묶는 간단 오믈렛.",
    required: ["leftoverFries", "egg"],
    optional: ["cheese", "ham", "onion", "ketchup"],
    time: "11분",
    difficulty: "쉬움",
    steps: [
      "감자튀김은 짧게 잘라 팬에서 먼저 데웁니다.",
      "계란을 풀고 치즈와 햄을 섞습니다.",
      "감자튀김 위에 계란물을 붓고 약한 불에서 익힙니다.",
      "케첩을 곁들여 먹습니다."
    ]
  }
];

const recipePhotos = {
  "kimchi-fried-rice": "assets/recipe-photos/kimchi-fried-rice-exact.jpg",
  "egg-rice": "assets/recipe-photos/egg-rice-exact.jpg",
  "potato-cheese": "assets/recipe-photos/potato-cheese.jpg",
  "ham-omelet": "assets/recipe-photos/ham-omelet.jpg",
  "kimchi-tofu": "assets/recipe-photos/kimchi-tofu.jpg",
  "tuna-mayo": "assets/recipe-photos/tuna-mayo.jpg",
  "mandu-guk": "assets/recipe-photos/mandu-guk-exact.jpg",
  "bibim-mandu": "assets/recipe-photos/bibim-mandu-exact.jpg",
  "mandu-fried-rice": "assets/recipe-photos/mandu-fried-rice.jpg",
  "shrimp-cheese-rice": "assets/recipe-photos/shrimp-cheese-rice.jpg",
  "nugget-rice-bowl": "assets/recipe-photos/nugget-rice-bowl.jpg",
  "tteok-mandu-ramyun": "assets/recipe-photos/tteok-mandu-ramyun.jpg",
  "fishcake-udon": "assets/recipe-photos/tteok-mandu-ramyun.jpg",
  "kimchi-cheese-rice": "assets/recipe-photos/kimchi-fried-rice-exact.jpg",
  "shrimp-kimchi-rice": "assets/recipe-photos/shrimp-cheese-rice.jpg",
  "mandu-tteokbokki": "assets/recipe-photos/tteok-mandu-ramyun.jpg",
  "nugget-cheese-potato": "assets/recipe-photos/nugget-rice-bowl.jpg",
  "tofu-kimchi-plate": "assets/recipe-photos/kimchi-tofu.jpg",
  "mushroom-egg-rice": "assets/recipe-photos/egg-rice-exact.jpg",
  "frozen-fried-rice-upgrade": "assets/recipe-photos/mandu-fried-rice.jpg"
};

Object.assign(recipePhotos, {
  "leftover-chicken-mayo": "assets/recipe-photos/nugget-rice-bowl.jpg",
  "pizza-egg-toast": "assets/recipe-photos/ham-omelet.jpg",
  "jokbal-fried-rice": "assets/recipe-photos/mandu-fried-rice.jpg",
  "bossam-kimchi-stew": "assets/recipe-photos/kimchi-tofu.jpg",
  "tteokbokki-fried-rice": "assets/recipe-photos/tteok-mandu-ramyun.jpg",
  "jjajang-omelet-rice": "assets/recipe-photos/egg-rice-exact.jpg",
  "tangsuyuk-stir-fry": "assets/recipe-photos/nugget-rice-bowl.jpg",
  "gimbap-egg-pan": "assets/recipe-photos/egg-rice-exact.jpg",
  "jjamppong-udon": "assets/recipe-photos/tteok-mandu-ramyun.jpg",
  "donkatsu-katsudon": "assets/recipe-photos/nugget-rice-bowl.jpg",
  "fries-cheese-omelet": "assets/recipe-photos/ham-omelet.jpg"
});

const recipeDetails = {
  "kimchi-fried-rice": {
    servings: "1인분",
    prep: "김치는 잘게 썰고 밥은 식은 밥이면 더 좋습니다.",
    ingredients: ["밥 1공기", "김치 1/2컵", "계란 1개", "대파 한 줌", "간장 1작은술"],
    tip: "김치를 먼저 충분히 볶아 신맛을 날리면 볶음밥 맛이 훨씬 깊어집니다."
  },
  "egg-rice": {
    servings: "1인분",
    prep: "밥은 따뜻하게 준비하고 계란은 반숙으로 익히면 가장 부드럽습니다.",
    ingredients: ["밥 1공기", "계란 1개", "간장 1큰술", "참기름 1작은술", "대파 약간"],
    tip: "치즈를 조금 넣으면 간장 맛이 부드러워져 아이들도 먹기 좋습니다."
  },
  "mandu-guk": {
    servings: "1-2인분",
    prep: "냉동만두는 해동하지 않고 바로 넣어도 됩니다.",
    ingredients: ["냉동만두 6개", "계란 1개", "물 또는 육수 600ml", "대파 약간", "국간장 1큰술"],
    tip: "만두를 넣은 뒤 너무 세게 저으면 만두피가 터질 수 있으니 국자로 살짝만 움직입니다."
  },
  "bibim-mandu": {
    servings: "1-2인분",
    prep: "양배추는 얇게 채 썰고 찬물에 담갔다 빼면 아삭합니다.",
    ingredients: ["냉동만두 8개", "양배추 두 줌", "양파 약간", "고추장 1큰술", "식초 1큰술"],
    tip: "만두와 채소를 따로 담으면 마지막까지 바삭함을 유지할 수 있습니다."
  },
  "shrimp-cheese-rice": {
    servings: "1인분",
    prep: "냉동새우는 팬에서 먼저 익혀 물기를 날려야 볶음밥이 질어지지 않습니다.",
    ingredients: ["밥 1공기", "냉동새우 8마리", "치즈 1장", "계란 1개", "양파 약간"],
    tip: "치즈는 불을 끈 뒤 올려 잔열로 녹이면 바닥에 눌어붙지 않습니다."
  },
  "tteok-mandu-ramyun": {
    servings: "1인분",
    prep: "떡은 딱딱하면 물에 5분 정도 담갔다가 넣습니다.",
    ingredients: ["라면 1봉", "냉동만두 3개", "떡 한 줌", "계란 1개", "대파 약간"],
    tip: "만두가 익는 시간이 면보다 길 수 있어 만두를 먼저 넣으면 속까지 잘 익습니다."
  }
};

Object.assign(recipeDetails, {
  "leftover-chicken-mayo": {
    servings: "1인분",
    prep: "치킨은 뼈와 눅눅한 튀김옷을 정리하고 팬에서 다시 데우면 식감이 살아납니다.",
    ingredients: ["남은 치킨 3-4조각", "밥 1공기", "계란 1개", "마요네즈 적당량", "김가루 선택"],
    tip: "양념치킨이라면 간장을 줄이고, 후라이드치킨이라면 간장이나 데리야키 소스를 조금 더하면 좋습니다."
  },
  "pizza-egg-toast": {
    servings: "1인분",
    prep: "피자는 토핑이 떨어지지 않게 작게 자르고, 치즈가 굳어 있으면 먼저 살짝 데웁니다.",
    ingredients: ["남은 피자 1-2조각", "계란 1개", "식빵 1장 선택", "치즈 선택", "우유 1큰술 선택"],
    tip: "피자 자체에 소스와 치즈가 있으므로 간은 거의 하지 않는 편이 좋습니다."
  },
  "jokbal-fried-rice": {
    servings: "1인분",
    prep: "족발 껍질과 살코기를 작게 썰면 밥과 잘 섞이고 질기지 않습니다.",
    ingredients: ["남은 족발 한 줌", "밥 1공기", "대파 한 줌", "김치 선택", "간장 1작은술"],
    tip: "족발의 기름이 나오기 때문에 식용유는 아주 조금만 쓰면 됩니다."
  },
  "tteokbokki-fried-rice": {
    servings: "1인분",
    prep: "남은 떡볶이 양념이 너무 되직하면 물을 한두 숟가락 넣어 풀어줍니다.",
    ingredients: ["남은 떡볶이 1컵", "밥 1공기", "치즈 선택", "김가루 선택", "계란 선택"],
    tip: "떡을 작게 자르면 볶음밥을 먹을 때 양념과 식감이 더 고르게 섞입니다."
  },
  "gimbap-egg-pan": {
    servings: "1인분",
    prep: "차가운 김밥은 바로 부치면 속까지 늦게 데워지므로 약한 불로 천천히 익힙니다.",
    ingredients: ["남은 김밥 5-8개", "계란 1-2개", "치즈 선택", "케첩 선택"],
    tip: "김밥이 많이 마른 상태라면 계란물을 넉넉히 묻혀 부드럽게 만드는 것이 좋습니다."
  },
  "jjamppong-udon": {
    servings: "1인분",
    prep: "국물이 짜면 물을 조금 더하고, 싱거우면 라면 스프나 간장을 아주 조금만 더합니다.",
    ingredients: ["남은 짬뽕 국물 1그릇", "우동면 1개", "계란 선택", "대파 선택", "냉동만두 선택"],
    tip: "우동면 대신 라면이나 밥을 넣어도 자연스럽게 다른 한 끼가 됩니다."
  },
  "donkatsu-katsudon": {
    servings: "1인분",
    prep: "돈까스는 오래 끓이면 튀김옷이 무너지므로 마지막에 올려 짧게 익힙니다.",
    ingredients: ["남은 돈까스 1장", "밥 1공기", "계란 1개", "양파 1/4개", "간장 1큰술"],
    tip: "계란은 완전히 익히기보다 살짝 촉촉할 때 밥 위에 올리면 덮밥 느낌이 살아납니다."
  }
});

function categoryRecipeTemplate(ingredient) {
  const titleBase = ingredient.name;
  const commonStep = `${titleBase}를 먹기 좋은 크기로 준비합니다.`;
  const ricePair = ingredients.some((item) => item.id === "rice") ? "rice" : "egg";
  const eggPair = ingredients.some((item) => item.id === "egg") ? "egg" : ricePair;

  if (ingredient.category === "delivery") {
    return {
      title: `${titleBase} 리메이크 덮밥`,
      icon: ingredient.icon,
      required: [ingredient.id, "rice"],
      optional: ["egg", "scallion", "mayo", "kimchi"],
      description: `${titleBase}을 버리지 않고 밥 위에 올려 새 한 끼로 바꾸는 재활용 레시피.`,
      steps: [
        `${titleBase}은 먹기 좋은 크기로 자르고 차가우면 먼저 데웁니다.`,
        "밥을 그릇에 담고 계란이나 대파가 있으면 함께 준비합니다.",
        "재료를 밥 위에 올리고 간장, 마요네즈, 김치 중 어울리는 것을 더합니다.",
        "전체를 가볍게 비벼 따뜻할 때 먹습니다."
      ]
    };
  }

  if (ingredient.category === "frozen") {
    return {
      title: `${titleBase} 빠른 한 접시`,
      icon: ingredient.icon,
      required: [ingredient.id],
      optional: ["egg", "rice", "cheese", "scallion"],
      description: `${titleBase}을 중심으로 냉장고 재료를 더해 빠르게 완성하는 간단 메뉴.`,
      steps: [
        `${titleBase}은 포장 안내에 맞춰 먼저 익힙니다.`,
        "계란, 밥, 치즈 중 있는 재료를 더해 한 접시 구성을 만듭니다.",
        "대파나 소스를 더해 향과 간을 맞춥니다.",
        "따뜻할 때 바로 담아 먹습니다."
      ]
    };
  }

  if (ingredient.category === "vegetable") {
    return {
      title: `${titleBase} 계란볶음`,
      icon: ingredient.icon,
      required: [ingredient.id, eggPair],
      optional: ["rice", "soySauce", "scallion", "ham"],
      description: `${titleBase}와 계란을 가볍게 볶아 반찬이나 덮밥으로 먹는 레시피.`,
      steps: [
        commonStep,
        "팬에 기름을 두르고 재료를 먼저 볶아 수분을 날립니다.",
        "계란을 넣어 부드럽게 섞고 간장으로 간을 맞춥니다.",
        "밥 위에 올리거나 반찬으로 담습니다."
      ]
    };
  }

  if (["protein", "seafood", "canned"].includes(ingredient.category)) {
    return {
      title: `${titleBase} 볶음밥`,
      icon: ingredient.icon,
      required: [ingredient.id, ricePair],
      optional: ["egg", "onion", "scallion", "soySauce"],
      description: `${titleBase}의 감칠맛을 살려 밥과 함께 볶는 든든한 한 그릇.`,
      steps: [
        commonStep,
        "팬에 양파나 대파를 먼저 볶아 향을 냅니다.",
        `${titleBase}와 밥을 넣고 고르게 섞어 볶습니다.`,
        "계란이나 간장을 더해 간을 맞추고 마무리합니다."
      ]
    };
  }

  if (ingredient.category === "grain") {
    return {
      title: `${titleBase} 냉장고 털이`,
      icon: ingredient.icon,
      required: [ingredient.id],
      optional: ["egg", "kimchi", "cheese", "ham"],
      description: `${titleBase}을 기본으로 남은 재료를 얹거나 볶아 만드는 빠른 한 끼.`,
      steps: [
        `${titleBase}을 먹기 좋게 데우거나 삶습니다.`,
        "계란, 김치, 치즈, 햄 중 있는 재료를 곁들입니다.",
        "간장이나 고추장으로 간을 맞춥니다.",
        "한 그릇에 담아 바로 먹습니다."
      ]
    };
  }

  return {
    title: `${titleBase} 활용 간단요리`,
    icon: ingredient.icon,
    required: [ingredient.id],
    optional: ["rice", "egg", "bread", "yogurt"],
    description: `${titleBase}을 집에 있는 기본 재료와 조합하는 빠른 아이디어 레시피.`,
    steps: [
      commonStep,
      "어울리는 기본 재료를 하나 골라 함께 준비합니다.",
      "간단히 섞거나 데워 먹기 좋은 형태로 만듭니다.",
      "맛을 보며 소스나 양념을 조금 더합니다."
    ]
  };
}

const existingRecipeIds = new Set(recipes.map((recipe) => recipe.id));
const existingRequiredKeys = new Set(recipes.map((recipe) => recipe.required.join("|")));
const generatedRecipes = ingredients
  .map((ingredient) => {
    const template = categoryRecipeTemplate(ingredient);
    const recipe = {
      id: `auto-${ingredient.id}`,
      title: template.title,
      icon: template.icon,
      description: template.description,
      required: template.required.filter((id) => ingredientById(id)),
      optional: template.optional.filter((id) => ingredientById(id)),
      time: ingredient.category === "delivery" ? "10분" : "12분",
      difficulty: "쉬움",
      steps: template.steps,
      generated: true
    };
    return recipe;
  })
  .filter((recipe) => {
    const key = recipe.required.join("|");
    if (existingRecipeIds.has(recipe.id) || existingRequiredKeys.has(key) || recipe.required.length === 0) return false;
    existingRequiredKeys.add(key);
    return true;
  });

recipes.push(...generatedRecipes.slice(0, Math.max(0, ingredients.length - recipes.length)));

const storedUserRecipes = loadJSON("userRecipes", []);
storedUserRecipes.forEach((recipe) => {
  if (!recipes.some((item) => item.id === recipe.id)) {
    recipes.unshift(recipe);
  }
});

function categoryPhotoFor(recipe) {
  const ids = [...recipe.required, ...recipe.optional];
  if (recipe.photo) return recipe.photo;
  if (ids.some((id) => ["ramyun", "udon", "somen", "pasta", "spaghetti", "riceNoodle", "leftoverJjamppong", "frozenUdon"].includes(id))) {
    return "assets/recipe-photos/tteok-mandu-ramyun.jpg";
  }
  if (ids.some((id) => ["frozenMandu", "dumplingWrapper"].includes(id))) {
    return "assets/recipe-photos/bibim-mandu-exact.jpg";
  }
  if (ids.some((id) => ["chickenNugget", "leftoverChicken", "leftoverDonkatsu", "leftoverTangSuyuk"].includes(id))) {
    return "assets/recipe-photos/nugget-rice-bowl.jpg";
  }
  if (ids.some((id) => ["frozenShrimp", "shrimp"].includes(id))) {
    return "assets/recipe-photos/shrimp-cheese-rice.jpg";
  }
  if (ids.includes("kimchi")) return "assets/recipe-photos/kimchi-fried-rice-exact.jpg";
  if (ids.includes("egg")) return "assets/recipe-photos/egg-rice-exact.jpg";
  return "assets/recipe-photos/mandu-fried-rice.jpg";
}

recipes.forEach((recipe) => {
  if (!recipePhotos[recipe.id]) {
    recipePhotos[recipe.id] = categoryPhotoFor(recipe);
  }
});

const defaultReviews = {
  "kimchi-fried-rice": [
    { author: "자취요리왕", rating: 5, text: "김치를 먼저 충분히 볶으니까 맛이 확 살아났어요." }
  ],
  "leftover-chicken-mayo": [
    { author: "야식처리반", rating: 5, text: "남은 치킨이 새 메뉴가 되는 느낌이라 좋았습니다." }
  ]
};

recipes.forEach((recipe) => {
  if (recipeDetails[recipe.id]) return;
  const requiredNames = recipe.required.map((id) => ingredientById(id)?.name).filter(Boolean);
  const optionalNames = recipe.optional.slice(0, 4).map((id) => ingredientById(id)?.name).filter(Boolean);
  recipeDetails[recipe.id] = {
    servings: recipe.required.length >= 3 ? "1-2인분" : "1인분",
    prep: `${requiredNames.join(", ")}를 먼저 준비하고, ${optionalNames.join(", ") || "선택 재료"}는 있으면 맛을 보강하는 용도로 더합니다.`,
    ingredients: [
      ...recipe.required.map((id) => `${ingredientById(id)?.name || id} 기본 재료`),
      ...recipe.optional.slice(0, 4).map((id) => `${ingredientById(id)?.name || id} 선택`)
    ],
    substitutes: optionalNames.length ? optionalNames.map((name) => `${name}로 대체하거나 풍미 보강`) : ["대파나 양파로 향 보강", "계란으로 단백질 보강"],
    tip: recipe.generated
      ? "자동 아이디어 레시피입니다. 실제 조리할 때는 간을 조금씩 보며 재료 양을 조절해보세요."
      : "집에 있는 재료 상황에 맞게 선택 재료를 줄이거나 비슷한 재료로 바꿔도 좋습니다."
  };
});

const state = {
  selected: new Set(),
  currentCategory: "all",
  currentResults: [],
  searchTerm: "",
  recipeSearchTerm: "",
  resultMode: "matched",
  resultFilter: "all",
  fridgeCollapsed: false,
  currentDetailId: null,
  editingReviewIndex: null,
  favorites: new Set(loadJSON("favoriteRecipes", [])),
  reviews: { ...defaultReviews, ...loadJSON("recipeReviews", {}) }
};

const screens = {
  home: document.querySelector("#homeScreen"),
  select: document.querySelector("#selectScreen"),
  result: document.querySelector("#resultScreen"),
  detail: document.querySelector("#detailScreen"),
  write: document.querySelector("#writeScreen")
};

const categoryTabs = document.querySelector("#categoryTabs");
const ingredientGrid = document.querySelector("#ingredientGrid");
const fridgeBox = document.querySelector("#fridgeBox");
const emptyFridgeText = document.querySelector("#emptyFridgeText");
const selectedCount = document.querySelector("#selectedCount");
const recipeList = document.querySelector("#recipeList");
const selectedSummary = document.querySelector("#selectedSummary");
const ingredientSearch = document.querySelector("#ingredientSearch");
const ingredientCount = document.querySelector("#ingredientCount");
const fridgePanel = document.querySelector(".fridge-panel");
const toggleFridgeButton = document.querySelector("#toggleFridgeButton");
const recipeSearch = document.querySelector("#recipeSearch");
const recipeCount = document.querySelector("#recipeCount");
const recipeForm = document.querySelector("#recipeForm");
const recipeFormNote = document.querySelector("#recipeFormNote");
const reviewForm = document.querySelector("#reviewForm");
const reviewList = document.querySelector("#reviewList");
const reviewCount = document.querySelector("#reviewCount");
const reviewSubmitButton = document.querySelector("#reviewSubmitButton");
const reviewCancelEditButton = document.querySelector("#reviewCancelEditButton");
const showAllRecipesButton = document.querySelector("#showAllRecipesButton");
const showFavoritesButton = document.querySelector("#showFavoritesButton");
const detailFavoriteButton = document.querySelector("#detailFavoriteButton");
const resultFilters = document.querySelector("#resultFilters");
const favoriteNavCount = document.querySelector("#favoriteNavCount");
const bottomNav = document.querySelector(".bottom-nav");

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  const activeNav = name === "select" ? "recommend" : name === "write" ? "write" : state.resultMode === "favorites" ? "favorites" : name === "result" ? "search" : "";
  if (activeNav) updateBottomNav(activeNav);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function ingredientById(id) {
  return ingredients.find((ingredient) => ingredient.id === id);
}

function filteredIngredients() {
  const term = state.searchTerm.trim().toLowerCase();
  return ingredients.filter((ingredient) => {
    const categoryMatched = state.currentCategory === "all" || ingredient.category === state.currentCategory;
    const searchMatched =
      !term ||
      ingredient.name.toLowerCase().includes(term) ||
      ingredient.id.toLowerCase().includes(term);
    return categoryMatched && searchMatched;
  });
}

function renderCategoryTabs() {
  categoryTabs.innerHTML = categories
    .map(
      (category) => `
        <button class="category-tab ${category.id === state.currentCategory ? "active" : ""}" type="button" data-category="${category.id}">
          ${category.name}
        </button>
      `
    )
    .join("");
}

function renderIngredientButtons() {
  const visibleIngredients = filteredIngredients();
  ingredientCount.textContent = `${visibleIngredients.length}개 재료 표시`;

  if (!visibleIngredients.length) {
    ingredientGrid.innerHTML = `
      <div class="no-result ingredient-empty">
        검색 결과가 없습니다. 다른 재료명으로 다시 찾아보세요.
      </div>
    `;
    return;
  }

  ingredientGrid.innerHTML = visibleIngredients
    .map((ingredient) => {
      const isSelected = state.selected.has(ingredient.id);
      return `
        <button class="ingredient-button ${isSelected ? "selected" : ""}" type="button" data-id="${ingredient.id}" title="좌클릭/터치 선택, 우클릭/더블 터치 취소">
          ${isSelected ? '<span class="ingredient-remove" aria-hidden="true">×</span>' : ""}
          <span class="ingredient-icon">${ingredient.icon}</span>
          <span class="ingredient-name">${ingredient.name}</span>
          <span class="ingredient-state">${isSelected ? "담김" : "선택"}</span>
        </button>
      `;
    })
    .join("");
}

function renderFridge() {
  const selectedIngredients = [...state.selected].map(ingredientById).filter(Boolean);

  selectedCount.textContent = `${selectedIngredients.length}개`;
  emptyFridgeText.style.display = selectedIngredients.length ? "none" : "block";
  fridgePanel.classList.toggle("collapsed", state.fridgeCollapsed);
  toggleFridgeButton.textContent = state.fridgeCollapsed ? "펼치기" : "접기";

  fridgeBox.querySelectorAll(".fridge-chip").forEach((chip) => chip.remove());
  selectedIngredients.forEach((ingredient) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "fridge-chip";
    chip.dataset.id = ingredient.id;
    chip.setAttribute("aria-label", `${ingredient.name} 빼기`);
    chip.innerHTML = `<span>${ingredient.icon}</span>${ingredient.name}<strong>×</strong>`;
    fridgeBox.appendChild(chip);
  });

  renderIngredientButtons();
}

function addIngredient(id) {
  if (state.selected.has(id)) return;
  state.selected.add(id);
  renderFridge();
}

function removeIngredient(id) {
  if (!state.selected.has(id)) return;
  state.selected.delete(id);
  renderFridge();
}

function toggleCategory(id) {
  state.currentCategory = id;
  renderCategoryTabs();
  renderIngredientButtons();
}

function enrichRecipe(recipe) {
  const missing = recipe.required.filter((id) => !state.selected.has(id));
  const requiredMatched = recipe.required.filter((id) => state.selected.has(id));
  const optionalMatched = recipe.optional.filter((id) => state.selected.has(id));
  const usesDelivery = [...recipe.required, ...recipe.optional].some((id) => {
    const ingredient = ingredientById(id);
    return ingredient?.category === "delivery" && state.selected.has(id);
  });
  const usesFrozen = [...recipe.required, ...recipe.optional].some((id) => {
    const ingredient = ingredientById(id);
    return ingredient?.category === "frozen" && state.selected.has(id);
  });
  const score =
    requiredMatched.length * 3 +
    optionalMatched.length * 0.8 -
    missing.length * 2 +
    (usesDelivery ? 1.4 : 0) +
    (usesFrozen ? 0.8 : 0);

  return {
    ...recipe,
    missing,
    requiredMatched,
    optionalMatched,
    usesDelivery,
    usesFrozen,
    score,
    matchRate: Math.round(((recipe.required.length - missing.length) / recipe.required.length) * 100)
  };
}

function calculateMatches() {
  const selectedIds = [...state.selected];

  return recipes
    .map(enrichRecipe)
    .filter((recipe) => selectedIds.length && recipe.missing.length <= 2 && recipe.requiredMatched.length > 0)
    .sort((a, b) => a.missing.length - b.missing.length || b.score - a.score);
}

function reasonFor(recipe) {
  const usedRequired = recipe.requiredMatched.map((id) => ingredientById(id)?.name).filter(Boolean);
  const usedOptional = recipe.optionalMatched.map((id) => ingredientById(id)?.name).filter(Boolean);
  const parts = [];

  if (!recipe.missing.length) parts.push("부족한 필수 재료가 없어요");
  else parts.push(`필수 재료 ${recipe.missing.length}개만 더 있으면 가능해요`);

  if (usedRequired.length) parts.push(`${usedRequired.slice(0, 3).join(", ")} 활용`);
  if (usedOptional.length) parts.push(`선택 재료 ${usedOptional.length}개 추가 매칭`);
  if (recipe.usesDelivery) parts.push("남은 배달 음식 활용");
  if (recipe.usesFrozen) parts.push("냉동식품 활용");

  return parts.join(" · ");
}

function recipeMatchesSearch(recipe) {
  const term = state.recipeSearchTerm.trim().toLowerCase();
  if (!term) return true;
  const ingredientText = [...recipe.required, ...recipe.optional]
    .map((id) => ingredientById(id)?.name || id)
    .join(" ");
  return `${recipe.title} ${recipe.description} ${ingredientText}`.toLowerCase().includes(term);
}

function recipeMatchesResultFilter(recipe) {
  if (state.resultFilter === "all") return true;
  if (state.resultFilter === "ready") return recipe.missing.length === 0;
  if (state.resultFilter === "missing1") return recipe.missing.length <= 1;
  if (state.resultFilter === "fast") return Number.parseInt(recipe.time, 10) <= 10;
  if (state.resultFilter === "delivery") return [...recipe.required, ...recipe.optional].some((id) => ingredientById(id)?.category === "delivery");
  if (state.resultFilter === "frozen") return [...recipe.required, ...recipe.optional].some((id) => ingredientById(id)?.category === "frozen");
  if (state.resultFilter === "rice") return [...recipe.required, ...recipe.optional].some((id) => ["rice", "instantRice", "brownRice", "leftoverRice"].includes(id));
  if (state.resultFilter === "noodle") return [...recipe.required, ...recipe.optional].some((id) => ["ramyun", "udon", "somen", "pasta", "spaghetti", "riceNoodle", "frozenUdon"].includes(id));
  if (state.resultFilter === "snack") return [...recipe.required, ...recipe.optional].some((id) => ["chickenNugget", "frozenMandu", "riceCake", "leftoverFries", "bread", "cheese"].includes(id));
  return true;
}

function updateBottomNav(active) {
  bottomNav.querySelectorAll("[data-nav]").forEach((button) => {
    button.classList.toggle("active-nav", button.dataset.nav === active);
  });
  favoriteNavCount.textContent = state.favorites.size;
}

function saveFavorites() {
  saveJSON("favoriteRecipes", [...state.favorites]);
}

function isFavorite(recipeId) {
  return state.favorites.has(recipeId);
}

function toggleFavorite(recipeId) {
  if (state.favorites.has(recipeId)) state.favorites.delete(recipeId);
  else state.favorites.add(recipeId);
  saveFavorites();
  updateBottomNav(state.resultMode === "favorites" ? "favorites" : state.resultMode === "matched" ? "recommend" : "search");
}

function photoFor(recipe) {
  return recipePhotos[recipe.id] || recipe.photo || "assets/fridge-hero.png";
}

function detailsFor(recipe) {
  const requiredNames = recipe.required.map((id) => ingredientById(id)?.name).filter(Boolean);
  const optionalNames = recipe.optional.slice(0, 4).map((id) => ingredientById(id)?.name).filter(Boolean);

  return recipeDetails[recipe.id] || {
    servings: recipe.required.length >= 3 ? "1-2인분" : "1인분",
    prep: `${requiredNames.join(", ")}를 먼저 준비하고, ${optionalNames.join(", ") || "선택 재료"}는 있으면 맛을 보강하는 용도로 더합니다.`,
    ingredients: [
      ...recipe.required.map((id) => `${ingredientById(id)?.name || id} 기본 재료`),
      ...recipe.optional.slice(0, 4).map((id) => `${ingredientById(id)?.name || id} 선택`)
    ],
    tip: "선택 재료는 모두 넣지 않아도 됩니다. 먼저 필수 재료로 맛의 중심을 만들고, 집에 있는 재료를 한두 가지 더해 식감이나 향을 보강해보세요.",
    substitutes: optionalNames.length ? optionalNames.map((name) => `${name}로 풍미 보강`) : ["대파나 양파로 향 보강", "계란으로 단백질 보강"]
  };
}

function sourceLabel(recipe) {
  if (recipe.userCreated) return "사용자 레시피";
  if (recipe.generated) return "자동 아이디어";
  return "공식 추천";
}

function renderSummary() {
  selectedSummary.innerHTML = [...state.selected]
    .map((id) => ingredientById(id))
    .filter(Boolean)
    .map((ingredient) => `<span class="summary-chip">${ingredient.icon} ${ingredient.name}</span>`)
    .join("");
}

function renderResults() {
  state.currentResults = state.resultMode === "matched" ? calculateMatches() : recipes.map(enrichRecipe);
  renderSummary();
  let visibleResults = state.currentResults.filter(recipeMatchesSearch).filter(recipeMatchesResultFilter);
  if (state.resultMode === "favorites") {
    visibleResults = visibleResults.filter((recipe) => isFavorite(recipe.id));
  }

  showAllRecipesButton.classList.toggle("active-filter", state.resultMode === "all");
  showFavoritesButton.classList.toggle("active-filter", state.resultMode === "favorites");
  resultFilters.querySelectorAll("[data-result-filter]").forEach((button) => {
    button.classList.toggle("active-filter", button.dataset.resultFilter === state.resultFilter);
  });
  updateBottomNav(state.resultMode === "matched" ? "recommend" : state.resultMode === "favorites" ? "favorites" : "search");
  recipeCount.textContent = `${visibleResults.length}개 레시피 표시`;

  if (!visibleResults.length) {
    recipeList.innerHTML = `
      <div class="no-result">
        조건에 맞는 레시피가 없습니다.
        재료를 더 담거나 검색어를 바꿔보세요.
      </div>
    `;
    return;
  }

  recipeList.innerHTML = visibleResults
    .map((recipe, index) => {
      const missingText = recipe.missing.length
        ? `부족한 재료 ${recipe.missing.map((id) => ingredientById(id).name).join(", ")}`
        : "바로 만들 수 있어요";

      return `
        <article class="recipe-card" style="animation-delay: ${index * 70}ms">
          <div class="recipe-photo-wrap">
            <img class="recipe-photo" src="${photoFor(recipe)}" alt="${recipe.title} 완성 사진" loading="lazy">
            <div class="recipe-icon">${recipe.icon}</div>
          </div>
          <div class="recipe-card-body">
            <h3>${recipe.title}</h3>
            <div class="recipe-badge">${sourceLabel(recipe)}</div>
            <p>${recipe.description}</p>
            <div class="recipe-meta">
              <span>${recipe.matchRate}% 매칭</span>
              <span>${missingText}</span>
              <span>${recipe.time}</span>
            </div>
            <div class="recipe-reason">${reasonFor(recipe)}</div>
            <button class="small-button" type="button" data-recipe-id="${recipe.id}">
              상세 보기
            </button>
            <button class="secondary-button favorite-button ${isFavorite(recipe.id) ? "saved" : ""}" type="button" data-favorite-id="${recipe.id}">
              ${isFavorite(recipe.id) ? "★ 저장됨" : "☆ 저장"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderDetail(recipeId) {
  const recipe = recipes.find((item) => item.id === recipeId);
  if (!recipe) return;
  const detail = detailsFor(recipe);
  state.currentDetailId = recipeId;
  state.editingReviewIndex = null;

  document.querySelector("#detailTitle").textContent = recipe.title;
  document.querySelector("#detailPhoto").src = photoFor(recipe);
  document.querySelector("#detailPhoto").alt = `${recipe.title} 완성 사진`;
  document.querySelector("#detailIcon").textContent = recipe.icon;
  document.querySelector("#detailDescription").textContent = recipe.description;
  document.querySelector("#detailTime").textContent = recipe.time;
  document.querySelector("#detailDifficulty").textContent = recipe.difficulty;
  document.querySelector("#detailServings").textContent = detail.servings;
  document.querySelector("#detailPrep").textContent = detail.prep;
  detailFavoriteButton.classList.toggle("saved", isFavorite(recipe.id));
  detailFavoriteButton.textContent = isFavorite(recipe.id) ? "★ 즐겨찾기 저장됨" : "☆ 즐겨찾기 저장";
  document.querySelector("#detailIngredients").innerHTML = detail.ingredients
    .map((ingredient) => `<span class="detail-chip">${ingredient}</span>`)
    .join("");
  const substitutes = detail.substitutes || recipe.optional.slice(0, 4).map((id) => {
    const ingredient = ingredientById(id);
    return ingredient ? `${ingredient.name} 활용 가능` : "집에 있는 재료로 대체";
  });
  document.querySelector("#detailSubstitutes").innerHTML = substitutes.length
    ? substitutes.map((item) => `<span class="detail-chip">${item}</span>`).join("")
    : `<span class="detail-chip">비슷한 식감의 재료로 대체 가능</span>`;
  document.querySelector("#detailSteps").innerHTML = recipe.steps
    .map((step) => `<li>${step}</li>`)
    .join("");
  document.querySelector("#detailTip").textContent = detail.tip;
  renderReviews(recipeId);

  showScreen("detail");
}

function splitNames(value) {
  return value
    .split(/[,，\n]/)
    .map((name) => name.trim())
    .filter(Boolean);
}

function findOrCreateIngredient(name) {
  const existing = ingredients.find((ingredient) => ingredient.name === name);
  if (existing) return existing.id;

  const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const ingredient = { id, name, icon: "🍽️", category: "pantry", custom: true };
  ingredients.push(ingredient);
  saveJSON("customIngredients", ingredients.filter((item) => item.custom));
  return id;
}

function createUserRecipe(form) {
  const title = form.querySelector("#recipeTitleInput").value.trim();
  const description = form.querySelector("#recipeDescriptionInput").value.trim();
  const author = form.querySelector("#recipeAuthor").value.trim();
  const required = splitNames(form.querySelector("#recipeRequiredInput").value).map(findOrCreateIngredient);
  const optional = splitNames(form.querySelector("#recipeOptionalInput").value).map(findOrCreateIngredient);
  const time = form.querySelector("#recipeTimeInput").value.trim();
  const difficulty = form.querySelector("#recipeDifficultyInput").value;
  const steps = splitNames(form.querySelector("#recipeStepsInput").value);
  const photo = form.querySelector("#recipePhotoInput").value;

  if (!title || !description || !author || !required.length || !steps.length) return null;

  const recipe = {
    id: `user-${Date.now()}`,
    title,
    icon: "📝",
    description: `${description} · by ${author}`,
    required,
    optional,
    time,
    difficulty,
    steps,
    photo,
    userCreated: true
  };

  recipes.unshift(recipe);
  saveJSON("userRecipes", recipes.filter((item) => item.userCreated));
  recipeDetails[recipe.id] = {
    servings: "작성자 기준",
    prep: "사용자가 직접 올린 레시피입니다. 재료 양은 취향과 냉장고 상황에 맞게 조절해보세요.",
    ingredients: [
      ...required.map((id) => `${ingredientById(id)?.name || id} 필수`),
      ...optional.map((id) => `${ingredientById(id)?.name || id} 선택`)
    ],
    tip: "직접 올린 레시피는 리뷰를 통해 실제 조리 경험을 계속 쌓아가면 더 좋은 콘텐츠가 됩니다."
  };

  return recipe;
}

function renderReviews(recipeId) {
  const reviews = state.reviews[recipeId] || [];
  reviewCount.textContent = `${reviews.length}개`;
  reviewSubmitButton.textContent = state.editingReviewIndex === null ? "리뷰 남기기" : "리뷰 수정하기";
  reviewCancelEditButton.hidden = state.editingReviewIndex === null;

  if (!reviews.length) {
    reviewList.innerHTML = `<div class="no-result ingredient-empty">아직 리뷰가 없습니다. 첫 리뷰를 남겨보세요.</div>`;
    return;
  }

  reviewList.innerHTML = reviews
    .map(
      (review, index) => `
        <article class="review-card">
          <div class="review-card-head">
            <div>
              <strong>${review.author}</strong>
              <span>${"★".repeat(Number(review.rating))}${"☆".repeat(5 - Number(review.rating))}</span>
            </div>
            <div class="review-card-actions">
              <button class="text-button" type="button" data-review-edit="${index}">수정</button>
              <button class="text-button danger-button" type="button" data-review-delete="${index}">삭제</button>
            </div>
          </div>
          <p>${review.text}</p>
        </article>
      `
    )
    .join("");
}

document.querySelector("#startButton").addEventListener("click", () => showScreen("select"));
document.querySelector("#backToSelectButton").addEventListener("click", () => showScreen("select"));
document.querySelector("#backToResultsButton").addEventListener("click", () => showScreen("result"));
document.querySelector("#openWriteButton").addEventListener("click", () => showScreen("write"));
document.querySelector("#backFromWriteButton").addEventListener("click", () => showScreen("select"));
document.querySelector("#openRecipeSearchButton").addEventListener("click", () => {
  state.resultMode = "all";
  state.resultFilter = "all";
  state.recipeSearchTerm = "";
  recipeSearch.value = "";
  renderResults();
  showScreen("result");
});

document.querySelector("#clearButton").addEventListener("click", () => {
  state.selected.clear();
  renderFridge();
});

toggleFridgeButton.addEventListener("click", () => {
  state.fridgeCollapsed = !state.fridgeCollapsed;
  renderFridge();
});

ingredientSearch.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  renderIngredientButtons();
});

recipeSearch.addEventListener("input", (event) => {
  state.recipeSearchTerm = event.target.value;
  renderResults();
});

document.querySelector("#recommendButton").addEventListener("click", () => {
  state.resultMode = "matched";
  state.resultFilter = "all";
  renderResults();
  showScreen("result");
});

showAllRecipesButton.addEventListener("click", () => {
  state.resultMode = "all";
  state.resultFilter = "all";
  renderResults();
});

showFavoritesButton.addEventListener("click", () => {
  state.resultMode = "favorites";
  renderResults();
});

resultFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-result-filter]");
  if (!button) return;
  state.resultFilter = button.dataset.resultFilter;
  renderResults();
});

detailFavoriteButton.addEventListener("click", () => {
  if (!state.currentDetailId) return;
  toggleFavorite(state.currentDetailId);
  renderDetail(state.currentDetailId);
});

bottomNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-nav]");
  if (!button) return;

  if (button.dataset.nav === "recommend") {
    showScreen("select");
    return;
  }

  if (button.dataset.nav === "search") {
    state.resultMode = "all";
    state.resultFilter = "all";
    state.recipeSearchTerm = "";
    recipeSearch.value = "";
    renderResults();
    showScreen("result");
    return;
  }

  if (button.dataset.nav === "favorites") {
    state.resultMode = "favorites";
    state.resultFilter = "all";
    renderResults();
    showScreen("result");
    return;
  }

  if (button.dataset.nav === "write") {
    showScreen("write");
  }
});

recipeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const recipe = createUserRecipe(recipeForm);
  if (!recipe) return;

  recipeForm.reset();
  recipeFormNote.textContent = "레시피가 게시되었습니다. 추천 결과와 검색에서 바로 확인할 수 있어요.";
  renderCategoryTabs();
  renderIngredientButtons();
  state.selected = new Set(recipe.required);
  renderFridge();
  state.recipeSearchTerm = recipe.title;
  recipeSearch.value = recipe.title;
  renderResults();
  showScreen("result");
});

reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.currentDetailId) return;

  const author = document.querySelector("#reviewAuthor").value.trim();
  const rating = document.querySelector("#reviewRating").value;
  const text = document.querySelector("#reviewText").value.trim();
  if (!author || !text) return;

  if (!state.reviews[state.currentDetailId]) state.reviews[state.currentDetailId] = [];
  if (state.editingReviewIndex === null) {
    state.reviews[state.currentDetailId].unshift({ author, rating, text });
  } else {
    state.reviews[state.currentDetailId][state.editingReviewIndex] = { author, rating, text };
    state.editingReviewIndex = null;
  }
  saveJSON("recipeReviews", state.reviews);
  reviewForm.reset();
  document.querySelector("#reviewRating").value = "5";
  renderReviews(state.currentDetailId);
});

reviewCancelEditButton.addEventListener("click", () => {
  state.editingReviewIndex = null;
  reviewForm.reset();
  document.querySelector("#reviewRating").value = "5";
  renderReviews(state.currentDetailId);
});

reviewList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-review-edit]");
  const deleteButton = event.target.closest("[data-review-delete]");
  if (!state.currentDetailId) return;

  if (editButton) {
    const index = Number(editButton.dataset.reviewEdit);
    const review = state.reviews[state.currentDetailId]?.[index];
    if (!review) return;
    state.editingReviewIndex = index;
    document.querySelector("#reviewAuthor").value = review.author;
    document.querySelector("#reviewRating").value = String(review.rating);
    document.querySelector("#reviewText").value = review.text;
    renderReviews(state.currentDetailId);
    reviewForm.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  if (deleteButton) {
    const index = Number(deleteButton.dataset.reviewDelete);
    state.reviews[state.currentDetailId]?.splice(index, 1);
    state.editingReviewIndex = null;
    saveJSON("recipeReviews", state.reviews);
    renderReviews(state.currentDetailId);
  }
});

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  toggleCategory(button.dataset.category);
});

ingredientGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".ingredient-button");
  if (!button) return;
  if (event.target.closest(".ingredient-remove")) {
    removeIngredient(button.dataset.id);
    return;
  }
  addIngredient(button.dataset.id);
});

ingredientGrid.addEventListener("dblclick", (event) => {
  const button = event.target.closest(".ingredient-button");
  if (!button) return;
  removeIngredient(button.dataset.id);
});

ingredientGrid.addEventListener("contextmenu", (event) => {
  const button = event.target.closest(".ingredient-button");
  if (!button) return;
  event.preventDefault();
  removeIngredient(button.dataset.id);
});

fridgeBox.addEventListener("click", (event) => {
  const chip = event.target.closest(".fridge-chip");
  if (!chip) return;
  removeIngredient(chip.dataset.id);
});

recipeList.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite-id]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favoriteId);
    renderResults();
    return;
  }

  const button = event.target.closest("[data-recipe-id]");
  if (!button) return;
  renderDetail(button.dataset.recipeId);
});

renderCategoryTabs();
renderIngredientButtons();
renderFridge();
