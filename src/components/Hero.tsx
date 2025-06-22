import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="gradient-hero text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Изучай английский
            <span className="block text-yellow-300">с удовольствием!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Персональные уроки от 45 минут до 1 часа. Гибкое расписание. Все
            уровни подготовки.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
          >
            <Icon name="Play" className="mr-2" />
            Начать бесплатно
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
          >
            <Icon name="Calendar" className="mr-2" />
            Выбрать расписание
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Icon
              name="Users"
              size={32}
              className="mx-auto mb-4 text-yellow-300"
            />
            <h3 className="text-lg font-semibold mb-2">Персональный подход</h3>
            <p className="text-sm opacity-90">
              Индивидуальная программа для каждого ученика
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Icon
              name="Clock"
              size={32}
              className="mx-auto mb-4 text-yellow-300"
            />
            <h3 className="text-lg font-semibold mb-2">Гибкое время</h3>
            <p className="text-sm opacity-90">
              Уроки 45-60 минут в удобное время
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <Icon
              name="TrendingUp"
              size={32}
              className="mx-auto mb-4 text-yellow-300"
            />
            <h3 className="text-lg font-semibold mb-2">Быстрый прогресс</h3>
            <p className="text-sm opacity-90">
              Видимые результаты уже через месяц
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
