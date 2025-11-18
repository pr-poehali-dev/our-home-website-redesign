import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function About() {
  const team = [
    { name: 'Иванов Сергей Петрович', position: 'Генеральный директор', icon: 'User' },
    { name: 'Смирнова Елена Викторовна', position: 'Главный бухгалтер', icon: 'Calculator' },
    { name: 'Петров Алексей Николаевич', position: 'Главный инженер', icon: 'Wrench' },
    { name: 'Кузнецова Мария Ивановна', position: 'Руководитель клиентского отдела', icon: 'Users' }
  ];

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="inline-block relative mb-12">
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-sm">О компании</h2>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Наша история</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Управляющая компания «НАШ ДОМ» работает на рынке жилищно-коммунальных услуг с 2005 года. 
              За это время мы зарекомендовали себя как надёжный и профессиональный партнёр для жильцов 
              многоквартирных домов Санкт-Петербурга.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Мы постоянно совершенствуем качество предоставляемых услуг, внедряем современные технологии 
              и стремимся создать максимально комфортные условия проживания для наших клиентов.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Создание комфортной и безопасной среды проживания через профессиональное управление 
              многоквартирными домами, прозрачное взаимодействие с жильцами и ответственное отношение 
              к общему имуществу.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Icon name="Check" className="text-primary mt-1" size={20} />
                <span className="text-muted-foreground">Высокое качество обслуживания</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" className="text-primary mt-1" size={20} />
                <span className="text-muted-foreground">Прозрачность финансовых операций</span>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="Check" className="text-primary mt-1" size={20} />
                <span className="text-muted-foreground">Оперативное реагирование на обращения</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent drop-shadow-sm">Наша команда</h3>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary to-accent rounded-full"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <Card key={idx} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={member.icon} className="text-primary" size={32} />
                </div>
                <h4 className="font-bold mb-1">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.position}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted rounded-2xl">
          <div className="text-center mb-8">
            <div className="inline-block relative">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">Лицензии и сертификаты</h3>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Icon name="FileCheck" className="text-primary mx-auto mb-3" size={40} />
              <p className="font-semibold">Лицензия № 12345</p>
              <p className="text-sm text-muted-foreground">на управление МКД</p>
            </div>
            <div className="text-center">
              <Icon name="Award" className="text-primary mx-auto mb-3" size={40} />
              <p className="font-semibold">Сертификат ISO 9001</p>
              <p className="text-sm text-muted-foreground">система менеджмента качества</p>
            </div>
            <div className="text-center">
              <Icon name="Shield" className="text-primary mx-auto mb-3" size={40} />
              <p className="font-semibold">СРО членство</p>
              <p className="text-sm text-muted-foreground">саморегулируемая организация</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}