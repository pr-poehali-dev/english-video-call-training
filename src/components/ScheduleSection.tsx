import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ScheduleSection = () => {
  const timeSlots = [
    { time: "09:00 - 10:00", available: true },
    { time: "10:30 - 11:30", available: true },
    { time: "14:00 - 15:00", available: false },
    { time: "16:00 - 17:00", available: true },
    { time: "18:30 - 19:30", available: true },
    { time: "20:00 - 21:00", available: true },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Гибкое расписание</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выбирайте удобное время для занятий. Длительность урока от 45 минут
            до 1 часа
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calendar" className="mr-3 text-primary" />
                  Доступные слоты на сегодня
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((slot, index) => (
                    <div
                      key={index}
                      className={`p-3 text-center rounded-lg border ${
                        slot.available
                          ? "border-green-200 bg-green-50 text-green-800"
                          : "border-gray-200 bg-gray-100 text-gray-500"
                      }`}
                    >
                      <div className="text-sm font-medium">{slot.time}</div>
                      <div className="text-xs mt-1">
                        {slot.available ? "Свободно" : "Занято"}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button className="flex-1">
                <Icon name="Calendar" className="mr-2" />
                Забронировать урок
              </Button>
              <Button variant="outline" className="flex-1">
                <Icon name="Clock" className="mr-2" />
                Настроить расписание
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl">
              <Icon name="Zap" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Быстрое бронирование
              </h3>
              <p className="text-gray-600">
                Забронируйте урок за 2 клика. Мгновенное подтверждение и
                напоминания.
              </p>
            </div>

            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 rounded-xl">
              <Icon
                name="RotateCcw"
                size={32}
                className="text-secondary mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Гибкая отмена</h3>
              <p className="text-gray-600">
                Отменяйте или переносите уроки за 2 часа без штрафов.
              </p>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-secondary/10 p-6 rounded-xl">
              <Icon name="Smartphone" size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Мобильное приложение
              </h3>
              <p className="text-gray-600">
                Управляйте расписанием и присоединяйтесь к урокам с телефона.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
