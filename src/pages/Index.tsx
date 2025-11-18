import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [coldWater, setColdWater] = useState('');
  const [hotWater, setHotWater] = useState('');
  const [electricity, setElectricity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Показания успешно отправлены!');
    setColdWater('');
    setHotWater('');
    setElectricity('');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Icon name="Building2" className="text-white" size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-secondary">НАШ ДОМ</h1>
              <p className="text-xs text-muted-foreground">Управляющая компания</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#meters" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Показания</a>
            <a href="#contacts" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-6xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
              Комфорт<br />вашего дома
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Профессиональное управление недвижимостью.<br />Прозрачно. Надёжно. Современно.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base px-8">
                Передать показания
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                О компании
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-destructive">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <Icon name="AlertTriangle" className="text-destructive" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Аварийная служба</h3>
                <p className="text-white/80">Круглосуточно, без выходных</p>
              </div>
            </div>
            <a 
              href="tel:+78121234567" 
              className="text-4xl font-bold text-white hover:text-white/90 transition-colors"
            >
              +7 (812) 123-45-67
            </a>
          </div>
        </div>
      </section>

      <section id="meters" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Gauge" className="text-primary" size={40} />
            </div>
            <h2 className="text-5xl font-bold text-secondary mb-4">Передать показания</h2>
            <p className="text-lg text-muted-foreground">
              Отправьте показания счётчиков онлайн за 1 минуту
            </p>
          </div>

          <Card className="border-0 shadow-2xl shadow-primary/5">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="coldWater" className="text-base mb-3 flex items-center gap-2">
                      <Icon name="Droplet" size={18} className="text-blue-500" />
                      Холодная вода (м³)
                    </Label>
                    <Input
                      id="coldWater"
                      type="number"
                      step="0.001"
                      placeholder="123.456"
                      value={coldWater}
                      onChange={(e) => setColdWater(e.target.value)}
                      className="h-14 text-lg"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="hotWater" className="text-base mb-3 flex items-center gap-2">
                      <Icon name="Droplet" size={18} className="text-red-500" />
                      Горячая вода (м³)
                    </Label>
                    <Input
                      id="hotWater"
                      type="number"
                      step="0.001"
                      placeholder="78.901"
                      value={hotWater}
                      onChange={(e) => setHotWater(e.target.value)}
                      className="h-14 text-lg"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="electricity" className="text-base mb-3 flex items-center gap-2">
                      <Icon name="Zap" size={18} className="text-yellow-500" />
                      Электроэнергия (кВт·ч)
                    </Label>
                    <Input
                      id="electricity"
                      type="number"
                      step="1"
                      placeholder="5432"
                      value={electricity}
                      onChange={(e) => setElectricity(e.target.value)}
                      className="h-14 text-lg"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-base mb-3">
                      Адрес
                    </Label>
                    <Input
                      id="address"
                      placeholder="ул. Невская, д. 15, кв. 42"
                      className="h-14 text-lg"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base mb-3">
                      Телефон
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      className="h-14 text-lg"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-base">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить показания
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Показания принимаются с 20 по 25 число каждого месяца
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">
              Комплексное обслуживание многоквартирных домов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Wrench',
                title: 'Содержание и ремонт',
                description: 'Техническое обслуживание общего имущества',
                price: '18.50 ₽/м²'
              },
              {
                icon: 'FileText',
                title: 'Управление домом',
                description: 'Административная работа и документооборот',
                price: '5.20 ₽/м²'
              },
              {
                icon: 'Trash2',
                title: 'Вывоз мусора',
                description: 'Организация вывоза ТКО',
                price: '8.90 ₽/м²'
              },
              {
                icon: 'Trees',
                title: 'Благоустройство',
                description: 'Уборка территории и озеленение',
                price: '4.30 ₽/м²'
              }
            ].map((service, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{service.price}</p>
                  <p className="text-sm text-muted-foreground mt-1">в месяц</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-secondary mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Мы всегда на связи
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                department: 'Диспетчерская',
                phone: '+7 (812) 123-45-67',
                schedule: 'Круглосуточно',
                icon: 'Phone'
              },
              {
                department: 'Бухгалтерия',
                phone: '+7 (812) 123-45-68',
                schedule: 'Пн-Пт 9:00-18:00',
                icon: 'Calculator'
              },
              {
                department: 'Приёмная',
                phone: '+7 (812) 123-45-69',
                schedule: 'Пн-Пт 9:00-18:00',
                icon: 'Users'
              },
              {
                department: 'Техническая служба',
                phone: '+7 (812) 123-45-70',
                schedule: 'Пн-Пт 9:00-18:00',
                icon: 'Settings'
              }
            ].map((contact, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <Icon name={contact.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg mb-1">{contact.department}</CardTitle>
                  <CardDescription className="text-sm">{contact.schedule}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href={`tel:${contact.phone.replace(/\D/g, '')}`}
                    className="text-xl font-semibold text-primary hover:underline"
                  >
                    {contact.phone}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="border-0 shadow-lg inline-block">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <CardTitle className="text-2xl">Офис компании</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-left space-y-3">
                <div>
                  <p className="font-semibold mb-1">Адрес:</p>
                  <p className="text-muted-foreground">г. Санкт-Петербург, ул. Примерная, д. 1</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Режим работы:</p>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Сб: 10:00 - 16:00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="Building2" className="text-white" size={22} />
                </div>
                <h3 className="text-xl font-bold">НАШ ДОМ</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Профессиональное управление<br />многоквартирными домами<br />с 2005 года
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Услуги и тарифы</a></li>
                <li><a href="#meters" className="hover:text-white transition-colors">Передать показания</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Уставные документы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Финансовая отчётность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Протоколы собраний</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p>© 2025 УК «НАШ ДОМ». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
