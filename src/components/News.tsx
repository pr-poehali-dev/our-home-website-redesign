import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function News() {
  const news = [
    {
      id: 1,
      title: 'Плановое отключение горячей воды',
      date: '15 ноября 2025',
      category: 'important',
      content: 'С 20 по 22 ноября на ул. Невская, 15 будет отключена горячая вода в связи с ремонтом теплотрассы. Просим жильцов заранее принять необходимые меры. По всем вопросам обращайтесь в диспетчерскую службу.'
    },
    {
      id: 2,
      title: 'Общее собрание собственников',
      date: '18 ноября 2025',
      category: 'meeting',
      content: '25 ноября в 18:00 состоится общее собрание собственников дома по адресу пр. Победы, 82. Повестка дня: выбор подрядчика для проведения капитального ремонта фасада, утверждение сметы расходов на 2026 год, разное.'
    },
    {
      id: 3,
      title: 'Благоустройство придомовой территории',
      date: '10 ноября 2025',
      category: 'news',
      content: 'Завершены работы по благоустройству территории возле дома на ул. Садовая, 43. Установлены новые скамейки, детская площадка, высажены декоративные кустарники. Благодарим жильцов за понимание во время проведения работ.'
    },
    {
      id: 4,
      title: 'График уборки подъездов',
      date: '5 ноября 2025',
      category: 'news',
      content: 'Напоминаем жильцам о графике влажной уборки подъездов: понедельник, среда, пятница с 10:00 до 14:00. Просим не загромождать лестничные клетки личными вещами.'
    },
    {
      id: 5,
      title: 'Проверка внутриквартирных счётчиков',
      date: '1 ноября 2025',
      category: 'important',
      content: 'С 10 по 20 декабря будет проводиться плановая проверка показаний счётчиков воды и электроэнергии. Контролёры будут иметь при себе удостоверения. Просим обеспечить доступ в квартиры.'
    }
  ];

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'important': return 'Важно!';
      case 'meeting': return 'Собрание';
      default: return 'Новость';
    }
  };

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent drop-shadow-sm">Новости и объявления</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-secondary rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground mt-6">Актуальная информация для жильцов</p>
        </div>

        <div className="space-y-6">
          {news.map((item) => (
            <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant={item.category === 'important' ? 'destructive' : 'secondary'} className="text-sm">
                    {getCategoryLabel(item.category)}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}