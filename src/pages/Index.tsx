import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeNews, setActiveNews] = useState('all');
  const [meterReadings, setMeterReadings] = useState({
    coldWater: '',
    hotWater: '',
    electricity: ''
  });

  const news = [
    {
      id: 1,
      title: 'Плановый ремонт кровли на ул. Невская, 15',
      date: '25 октября 2025',
      category: 'repair',
      tag: 'Ремонт',
      excerpt: 'С 1 ноября начнутся работы по восстановлению кровельного покрытия...'
    },
    {
      id: 2,
      title: 'Собрание собственников 28 октября',
      date: '20 октября 2025',
      category: 'meeting',
      tag: 'Собрание',
      excerpt: 'Приглашаем всех собственников на общее собрание. Повестка дня: выбор подрядчика...'
    },
    {
      id: 3,
      title: 'Изменение графика работы диспетчерской',
      date: '28 октября 2025',
      category: 'important',
      tag: 'Важно!',
      excerpt: 'С 1 ноября диспетчерская служба переходит на круглосуточный режим работы...'
    }
  ];

  const services = [
    {
      title: 'Содержание и ремонт',
      description: 'Техническое обслуживание общего имущества',
      price: 'от 18.50 ₽/м²',
      icon: 'Wrench'
    },
    {
      title: 'Управление домом',
      description: 'Административная работа и документооборот',
      price: 'от 5.20 ₽/м²',
      icon: 'FileText'
    },
    {
      title: 'Вывоз мусора',
      description: 'Организация вывоза ТКО',
      price: 'от 8.90 ₽/м²',
      icon: 'Trash2'
    },
    {
      title: 'Благоустройство',
      description: 'Уборка территории и озеленение',
      price: 'от 4.30 ₽/м²',
      icon: 'Trees'
    }
  ];

  const houses = [
    { id: 1, address: 'ул. Невская, 15', district: 'Центральный', x: 30, y: 40 },
    { id: 2, address: 'пр. Победы, 82', district: 'Московский', x: 55, y: 35 },
    { id: 3, address: 'ул. Садовая, 43', district: 'Адмиралтейский', x: 45, y: 60 },
    { id: 4, address: 'наб. Фонтанки, 120', district: 'Центральный', x: 70, y: 45 }
  ];

  const contacts = [
    {
      department: 'Диспетчерская служба',
      phone: '+7 (812) 123-45-67',
      schedule: 'Круглосуточно',
      icon: 'Phone',
      urgent: true
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
      department: 'Аварийная служба',
      phone: '+7 (812) 123-45-00',
      schedule: 'Круглосуточно',
      icon: 'AlertTriangle',
      urgent: true
    }
  ];

  const handleMeterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Показания отправлены:', meterReadings);
    alert('Спасибо! Показания счетчиков успешно переданы.');
    setMeterReadings({ coldWater: '', hotWater: '', electricity: '' });
  };

  const filteredNews = activeNews === 'all' 
    ? news 
    : news.filter(item => item.category === activeNews);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building2" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-secondary">НАШ ДОМ</h1>
                <p className="text-xs text-muted-foreground">Группа управляющих компаний</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#news" className="text-sm font-medium hover:text-primary transition-colors">Новости</a>
              <a href="#meters" className="text-sm font-medium hover:text-primary transition-colors">Показания</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/7670117d-5425-4247-b2be-bde60aa00a47/files/52774f58-1edf-4421-a6d9-4f6f4fa854f2.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/75"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Управление домами с заботой о жильцах
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Прозрачная работа, профессиональное обслуживание и комфорт каждого дома
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90">
                <Icon name="FileText" size={20} className="mr-2" />
                Документы
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                О компании
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.filter(c => c.urgent).map((contact, idx) => (
              <Card key={idx} className={contact.urgent ? 'border-destructive shadow-lg' : ''}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${contact.urgent ? 'bg-destructive' : 'bg-primary'}`}>
                      <Icon name={contact.icon} className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-sm">{contact.department}</CardTitle>
                      <CardDescription className="text-xs">{contact.schedule}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a 
                    href={`tel:${contact.phone.replace(/\D/g, '')}`}
                    className="text-xl font-bold text-primary hover:underline"
                  >
                    {contact.phone}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Комплексное обслуживание многоквартирных домов с прозрачными тарифами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                  <p className="text-sm text-muted-foreground mt-1">в месяц</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Калькулятор тарифов</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="area">Площадь квартиры (м²)</Label>
                  <Input id="area" type="number" placeholder="45" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="residents">Количество проживающих</Label>
                  <Input id="residents" type="number" placeholder="3" className="mt-2" />
                </div>
              </div>
              <div className="mt-6 p-6 bg-white rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Примерная стоимость услуг</p>
                    <p className="text-3xl font-bold text-primary mt-1">1 642 ₽</p>
                    <p className="text-xs text-muted-foreground mt-1">в месяц</p>
                  </div>
                  <Button>
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши дома</h2>
            <p className="text-muted-foreground text-lg">
              Интерактивная карта обслуживаемых домов
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-blue-100 to-blue-50" style={{ height: '500px' }}>
                <svg className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {houses.map((house) => (
                    <g key={house.id}>
                      <circle
                        cx={`${house.x}%`}
                        cy={`${house.y}%`}
                        r="8"
                        fill="#0EA5E9"
                        className="cursor-pointer hover:fill-secondary transition-colors"
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                      />
                      <circle
                        cx={`${house.x}%`}
                        cy={`${house.y}%`}
                        r="16"
                        fill="none"
                        stroke="#0EA5E9"
                        strokeWidth="2"
                        opacity="0.3"
                        className="animate-ping"
                        style={{ animationDuration: '2s' }}
                      />
                    </g>
                  ))}
                </svg>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {houses.map((house) => (
              <Card key={house.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    {house.address}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{house.district}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="meters" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gauge" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl">Передать показания счетчиков</CardTitle>
                <CardDescription>
                  Отправьте показания быстро и удобно онлайн
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMeterSubmit} className="space-y-6">
                  <Tabs defaultValue="water" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="water">Вода</TabsTrigger>
                      <TabsTrigger value="electricity">Электричество</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="water" className="space-y-4 mt-6">
                      <div>
                        <Label htmlFor="coldWater" className="flex items-center gap-2 mb-2">
                          <Icon name="Droplet" size={16} className="text-blue-500" />
                          Холодная вода (м³)
                        </Label>
                        <Input
                          id="coldWater"
                          type="number"
                          step="0.001"
                          placeholder="123.456"
                          value={meterReadings.coldWater}
                          onChange={(e) => setMeterReadings(prev => ({ ...prev, coldWater: e.target.value }))}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="hotWater" className="flex items-center gap-2 mb-2">
                          <Icon name="Droplet" size={16} className="text-red-500" />
                          Горячая вода (м³)
                        </Label>
                        <Input
                          id="hotWater"
                          type="number"
                          step="0.001"
                          placeholder="78.901"
                          value={meterReadings.hotWater}
                          onChange={(e) => setMeterReadings(prev => ({ ...prev, hotWater: e.target.value }))}
                          required
                        />
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="electricity" className="space-y-4 mt-6">
                      <div>
                        <Label htmlFor="electricity" className="flex items-center gap-2 mb-2">
                          <Icon name="Zap" size={16} className="text-yellow-500" />
                          Электроэнергия (кВт·ч)
                        </Label>
                        <Input
                          id="electricity"
                          type="number"
                          step="1"
                          placeholder="5432"
                          value={meterReadings.electricity}
                          onChange={(e) => setMeterReadings(prev => ({ ...prev, electricity: e.target.value }))}
                          required
                        />
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="space-y-3">
                    <Label htmlFor="address">Адрес</Label>
                    <Input id="address" placeholder="ул. Невская, д. 15, кв. 42" required />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="phone">Телефон для связи</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить показания
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Показания принимаются с 20 по 25 число каждого месяца
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="news" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Новости и объявления</h2>
            <p className="text-muted-foreground text-lg">
              Актуальная информация для жильцов
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            <Button
              variant={activeNews === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveNews('all')}
            >
              Все новости
            </Button>
            <Button
              variant={activeNews === 'important' ? 'default' : 'outline'}
              onClick={() => setActiveNews('important')}
            >
              Важно!
            </Button>
            <Button
              variant={activeNews === 'repair' ? 'default' : 'outline'}
              onClick={() => setActiveNews('repair')}
            >
              Ремонт
            </Button>
            <Button
              variant={activeNews === 'meeting' ? 'default' : 'outline'}
              onClick={() => setActiveNews('meeting')}
            >
              Собрание
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredNews.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant={item.category === 'important' ? 'destructive' : 'secondary'}>
                      {item.tag}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{item.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">
              Мы всегда на связи
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" />
                  Офис компании
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium mb-1">Адрес:</p>
                  <p className="text-muted-foreground">г. Санкт-Петербург, ул. Примерная, д. 1</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Режим работы:</p>
                  <p className="text-muted-foreground">Понедельник - Пятница: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Суббота: 10:00 - 16:00</p>
                  <p className="text-muted-foreground">Воскресенье: выходной</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {contacts.map((contact, idx) => (
                <Card key={idx}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Icon name={contact.icon} size={18} className="text-primary" />
                      {contact.department}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={`tel:${contact.phone.replace(/\D/g, '')}`}
                      className="text-lg font-semibold text-primary hover:underline block"
                    >
                      {contact.phone}
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">{contact.schedule}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Building2" className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">НАШ ДОМ</h3>
                  <p className="text-xs text-white/70">УК</p>
                </div>
              </div>
              <p className="text-sm text-white/80">
                Профессиональное управление многоквартирными домами с 2005 года
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#services" className="hover:text-white transition-colors">Услуги и тарифы</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#meters" className="hover:text-white transition-colors">Передать показания</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Уставные документы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Финансовая отчетность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Протоколы собраний</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Договоры</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>© 2025 Группа управляющих компаний «НАШ ДОМ». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
