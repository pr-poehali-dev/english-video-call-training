import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const LevelsSection = () => {
  const levels = [
    {
      title: "Начальный (A1-A2)",
      description: "Изучение основ языка, базовая грамматика и словарь",
      duration: "45 минут",
      features: [
        "Алфавит и произношение",
        "Простые фразы",
        "Базовая грамматика",
      ],
      color: "bg-green-100 text-green-800",
      icon: "BookOpen",
    },
    {
      title: "Средний (B1-B2)",
      description: "Развитие разговорных навыков и понимания",
      duration: "50 минут",
      features: ["Диалоги", "Чтение текстов", "Письменные упражнения"],
      color: "bg-blue-100 text-blue-800",
      icon: "MessageCircle",
    },
    {
      title: "Продвинутый (C1-C2)",
      description:
        "Совершенствование языка для профессионального использования",
      duration: "60 минут",
      features: ["Деловая лексика", "Презентации", "Сложная грамматика"],
      color: "bg-purple-100 text-purple-800",
      icon: "Award",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Выберите свой уровень</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            От новичка до эксперта — у нас есть программа для каждого уровня
            подготовки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-primary"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon
                    name={level.icon as any}
                    size={32}
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-2xl mb-2">{level.title}</CardTitle>
                <Badge className={level.color}>{level.duration}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-center">
                  {level.description}
                </p>
                <ul className="space-y-2">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LevelsSection;
