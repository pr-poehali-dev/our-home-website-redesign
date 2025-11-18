import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServicesProps {
  onNavigate: (section: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: 'Wrench',
      title: 'Техническое обслуживание',
      description: 'Содержание и ремонт общего имущества многоквартирных домов',
      price: '18.50 ₽/м²',
      features: ['Обслуживание инженерных систем', 'Ремонт подъездов', 'Текущий ремонт кровли']
    },
    {
      icon: 'FileText',
      title: 'Управление домом',
      description: 'Полный комплекс услуг по управлению многоквартирным домом',
      price: '5.20 ₽/м²',
      features: ['Ведение документации', 'Расчёт коммунальных услуг', 'Организация собраний']
    },
    {
      icon: 'Trash2',
      title: 'Вывоз мусора',
      description: 'Организация сбора и вывоза твёрдых коммунальных отходов',
      price: '8.90 ₽/м²',
      features: ['Вывоз ТКО', 'Содержание контейнерных площадок', 'Раздельный сбор мусора']
    },
    {
      icon: 'Trees',
      title: 'Благоустройство',
      description: 'Уборка и озеленение придомовой территории',
      price: '4.30 ₽/м²',
      features: ['Уборка территории', 'Озеленение', 'Уход за газонами']
    },
    {
      icon: 'Droplets',
      title: 'Сантехнические работы',
      description: 'Ремонт и обслуживание систем водоснабжения',
      price: 'от 500 ₽',
      features: ['Устранение протечек', 'Замена сантехники', 'Прочистка канализации']
    },
    {
      icon: 'Lightbulb',
      title: 'Электромонтажные работы',
      description: 'Ремонт и обслуживание электрических систем',
      price: 'от 800 ₽',
      features: ['Ремонт проводки', 'Установка светильников', 'Замена счётчиков']
    }
  ];

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent drop-shadow-sm">Наши услуги</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-accent rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground mt-6">Полный комплекс услуг по управлению многоквартирными домами</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-4">{service.price}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" className="text-primary mt-0.5" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" onClick={() => onNavigate('contacts')}>
            Получить консультацию
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}