import { FaLeaf, FaPepperHot } from "react-icons/fa";

export interface Dish {
  name: string;
  description: string;
  weight: number; // г
  price: string;
  vegetarian?: boolean;
  spicy?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  dishes: Dish[];
}

export const MENU: MenuSection[] = [
  {
    id: "cold-appetizers",
    title: "Холодные закуски",
    dishes: [
      { name: "Сельдь под шубой", description: "Классическая закуска", weight: 130, price: "1555 руб" },
      { name: "Овощное ассорти", description: "Свежие сезонные овощи", weight: 150, price: "200 руб", vegetarian: true },
      { name: "Мясная нарезка", description: "Ветчина, салями, буженина", weight: 200, price: "450 руб" },
      { name: "Сырная тарелка", description: "Ассорти сыров с сухофруктами", weight: 180, price: "350 руб", vegetarian: true },
      { name: "Маринованные грибы", description: "Шампиньоны с уксусом и специями", weight: 120, price: "220 руб", vegetarian: true, spicy: true },
    ],
  },
  {
    id: "hot-appetizers",
    title: "Горячие закуски",
    dishes: [
      { name: "Куриные крылышки", description: "Острые крылышки с соусом BBQ", weight: 180, price: "400 руб", spicy: true },
      { name: "Мини-котлетки", description: "Куриные котлетки с картофелем", weight: 150, price: "350 руб" },
      { name: "Фрикадельки в томатном соусе", description: "Мясные фрикадельки с соусом", weight: 150, price: "300 руб" },
      { name: "Жульен грибной", description: "Сливочный жульен с грибами", weight: 130, price: "320 руб", vegetarian: true },
      { name: "Овощные рулеты", description: "Рулеты из баклажанов с начинкой", weight: 120, price: "280 руб", vegetarian: true, spicy: true },
    ],
  },
  {
    id: "salads",
    title: "Салаты",
    dishes: [
      { name: "Цезарь с курицей", description: "Салат с курицей и соусом Цезарь", weight: 200, price: "350 руб" },
      { name: "Греческий", description: "Помидоры, огурцы, сыр фета, оливки", weight: 180, price: "320 руб", vegetarian: true },
      { name: "Оливье", description: "Классический салат с майонезом", weight: 200, price: "300 руб", vegetarian: true },
      { name: "Салат с морепродуктами", description: "Креветки, кальмары, соус", weight: 180, price: "450 руб" },
      { name: "Салат с авокадо", description: "Свежий авокадо, помидоры, зелень", weight: 150, price: "350 руб", vegetarian: true },
    ],
  },
  {
    id: "portion-hot",
    title: "Порционные горячие",
    dishes: [
      { name: "Филе миньон", description: "С овощами гриль", weight: 200, price: "550 руб" },
      { name: "Куриное филе в соусе терияки", description: "С рисом", weight: 180, price: "400 руб" },
      { name: "Судак под сливочным соусом", description: "Филе судака с овощами", weight: 200, price: "450 руб" },
      { name: "Овощное рагу", description: "Тушеные сезонные овощи", weight: 180, price: "300 руб", vegetarian: true },
      { name: "Паста с томатным соусом", description: "Спагетти с соусом маринара", weight: 200, price: "350 руб", vegetarian: true, spicy: true },
    ],
  },
  {
    id: "hot-company",
    title: "Горячие блюда на компанию",
    dishes: [
      { name: "Запеченная утка", description: "С яблоками и апельсинами", weight: 800, price: "1500 руб" },
      { name: "Ростбиф", description: "Говядина с розмарином", weight: 700, price: "1800 руб" },
      { name: "Каре ягненка", description: "С соусом демиглас", weight: 600, price: "2000 руб" },
      { name: "Овощная запеканка", description: "Баклажаны, перец, помидоры", weight: 500, price: "1200 руб", vegetarian: true },
      { name: "Плов с курицей", description: "Традиционный восточный плов", weight: 700, price: "1400 руб" },
    ],
  },
  {
    id: "sides",
    title: "Гарниры на компанию",
    dishes: [
      { name: "Картофель фри", description: "Хрустящий картофель", weight: 300, price: "250 руб", vegetarian: true },
      { name: "Рис с овощами", description: "Отварной рис с овощами", weight: 300, price: "300 руб", vegetarian: true },
      { name: "Овощное ассорти на пару", description: "Брокколи, морковь, цветная капуста", weight: 300, price: "350 руб", vegetarian: true },
      { name: "Гречка с грибами", description: "Тушеная гречка с грибами", weight: 250, price: "300 руб", vegetarian: true },
      { name: "Картофельное пюре", description: "Сливочное пюре", weight: 250, price: "250 руб", vegetarian: true },
    ],
  },
  {
    id: "sauces",
    title: "Соусы",
    dishes: [
      { name: "Томатный соус", description: "Для пасты и мяса", weight: 50, price: "50 руб", vegetarian: true },
      { name: "Сырный соус", description: "Для горячих закусок", weight: 50, price: "70 руб", vegetarian: true },
      { name: "Острый соус чили", description: "Для любителей острого", weight: 50, price: "50 руб", spicy: true },
      { name: "Соус барбекю", description: "Для мясных блюд", weight: 50, price: "60 руб" },
      { name: "Грибной соус", description: "Сливочный грибной соус", weight: 50, price: "70 руб", vegetarian: true },
    ],
  },
  {
    id: "bread",
    title: "Хлеб и выпечка",
    dishes: [
      { name: "Багет", description: "Французский багет", weight: 100, price: "50 руб", vegetarian: true },
      { name: "Булочки с корицей", description: "Сладкая выпечка", weight: 80, price: "70 руб", vegetarian: true },
      { name: "Хлеб цельнозерновой", description: "Полезный хлеб", weight: 100, price: "60 руб", vegetarian: true },
      { name: "Лепешки", description: "Арабские лепешки", weight: 90, price: "50 руб", vegetarian: true },
      { name: "Пирожки с капустой", description: "С начинкой из капусты", weight: 70, price: "60 руб", vegetarian: true },
    ],
  },
  {
    id: "soups",
    title: "Супы",
    dishes: [
      { name: "Борщ", description: "С говядиной и свеклой", weight: 300, price: "350 руб" },
      { name: "Куриный суп", description: "С вермишелью", weight: 300, price: "300 руб" },
      { name: "Гаспачо", description: "Холодный томатный суп", weight: 250, price: "250 руб", vegetarian: true, spicy: true },
      { name: "Суп из шампиньонов", description: "Сливочный грибной суп", weight: 250, price: "300 руб", vegetarian: true },
      { name: "Том ям", description: "Острый тайский суп", weight: 250, price: "400 руб", spicy: true },
    ],
  },
  {
    id: "desserts",
    title: "Десерты",
    dishes: [
      { name: "Тирамису", description: "Классический итальянский", weight: 150, price: "350 руб" },
      { name: "Чизкейк", description: "Нью-Йорк стиль", weight: 150, price: "350 руб" },
      { name: "Шоколадный фондан", description: "С жидкой сердцевиной", weight: 120, price: "400 руб" },
      { name: "Фруктовый салат", description: "Свежие фрукты", weight: 200, price: "250 руб", vegetarian: true },
      { name: "Мороженое с ягодами", description: "Домашнее мороженое", weight: 150, price: "300 руб", vegetarian: true },
    ],
  },
];
