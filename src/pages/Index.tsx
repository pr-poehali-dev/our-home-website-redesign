import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import About from '@/components/About';
import Services from '@/components/Services';
import Houses from '@/components/Houses';
import News from '@/components/News';
import Cabinet from '@/components/Cabinet';
import Contacts from '@/components/Contacts';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const newsPreview = [
    {
      id: 1,
      title: 'Плановое отключение горячей воды',
      date: '15 ноября 2025',
      category: 'important',
      excerpt: 'С 20 по 22 ноября на ул. Невская, 15 будет отключена горячая вода в связи с ремонтом теплотрассы...'
    },
    {
      id: 2,
      title: 'Общее собрание собственников',
      date: '18 ноября 2025',
      category: 'meeting',
      excerpt: '25 ноября в 18:00 состоится общее собрание собственников дома по адресу пр. Победы, 82...'
    },
    {
      id: 3,
      title: 'Благоустройство придомовой территории',
      date: '10 ноября 2025',
      category: 'news',
      excerpt: 'Завершены работы по благоустройству территории возле дома на ул. Садовая, 43...'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'services':
        return <Services onNavigate={setActiveSection} />;
      case 'houses':
        return <Houses onNavigate={setActiveSection} />;
      case 'news':
        return <News />;
      case 'cabinet':
        return <Cabinet />;
      case 'contacts':
        return <Contacts />;
      default:
        return (
          <>
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-transparent"></div>
              <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-3xl animate-fade-in">
                  <h2 className="text-6xl md:text-7xl font-bold text-secondary mb-6 leading-[1.1] tracking-tight">
                    Комфорт<br />вашего дома
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Профессиональное управление недвижимостью.<br />Прозрачно. Надёжно. Современно.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="text-base px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" onClick={() => setActiveSection('cabinet')}>
                      Личный кабинет
                    </Button>
                    <Button size="lg" variant="outline" className="text-base px-8 hover:bg-primary/5 transition-all duration-300" onClick={() => setActiveSection('about')}>
                      О компании
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 px-6">
              <div className="max-w-7xl mx-auto">
                <Card className="border-2 border-orange-200 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                          <Icon name="Phone" className="text-orange-600" size={32} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-orange-900 mb-1">Аварийная служба</h3>
                          <p className="text-orange-700">Круглосуточно, без выходных</p>
                        </div>
                      </div>
                      <a 
                        href="tel:+78121234567" 
                        className="text-4xl font-bold text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        +7 (812) 123-45-67
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="py-24 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-bold text-secondary mb-4">Почему выбирают нас</h2>
                  <p className="text-lg text-muted-foreground">Более 20 лет заботимся о вашем комфорте</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="border-0 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="pt-8 pb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon name="Award" className="text-primary" size={32} />
                      </div>
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">20+ лет</h3>
                      <p className="text-muted-foreground">на рынке жилищно-коммунальных услуг</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="pt-8 pb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon name="Building2" className="text-primary" size={32} />
                      </div>
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">150+ домов</h3>
                      <p className="text-muted-foreground">находятся под нашим управлением</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="pt-8 pb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon name="Users" className="text-primary" size={32} />
                      </div>
                      <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">50 000+</h3>
                      <p className="text-muted-foreground">довольных жильцов</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section className="py-24 px-6 bg-muted">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-bold text-secondary mb-4">Последние новости</h2>
                  <p className="text-lg text-muted-foreground">Будьте в курсе важных событий</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {newsPreview.map((item) => (
                    <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant={item.category === 'important' ? 'destructive' : 'secondary'} className="font-medium">
                            {item.category === 'important' ? 'Важно!' : item.category === 'meeting' ? 'Собрание' : 'Новость'}
                          </Badge>
                          <span className="text-xs text-muted-foreground font-medium">{item.date}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                        <Button variant="link" className="p-0 h-auto group-hover:translate-x-1 transition-transform" onClick={() => setActiveSection('news')}>
                          Читать далее
                          <Icon name="ArrowRight" size={16} className="ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Button size="lg" variant="outline" onClick={() => setActiveSection('news')}>
                    Все новости
                  </Button>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('home')}>
              <img 
                src="https://cdn.poehali.dev/files/9281896f-fd52-4945-80f9-4839e40da7e7.png" 
                alt="НАШ ДОМ" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-secondary">НАШ ДОМ</h1>
                <p className="text-xs text-muted-foreground">Управляющая компания</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => setActiveSection('home')} className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>Главная</button>
              <button onClick={() => setActiveSection('about')} className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>О компании</button>
              <button onClick={() => setActiveSection('services')} className={`text-sm font-medium transition-colors ${activeSection === 'services' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>Услуги</button>
              <button onClick={() => setActiveSection('houses')} className={`text-sm font-medium transition-colors ${activeSection === 'houses' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>Наши дома</button>
              <button onClick={() => setActiveSection('news')} className={`text-sm font-medium transition-colors ${activeSection === 'news' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>Новости</button>
              <button onClick={() => setActiveSection('cabinet')} className={`text-sm font-medium transition-colors ${activeSection === 'cabinet' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>Личный кабинет</button>
              <button onClick={() => setActiveSection('contacts')} className={`text-sm font-medium transition-colors ${activeSection === 'contacts' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>Контакты</button>
            </nav>
          </div>
        </div>
      </header>

      {renderContent()}

      <footer className="bg-secondary text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/9281896f-fd52-4945-80f9-4839e40da7e7.png" 
                  alt="НАШ ДОМ" 
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
                <h3 className="text-xl font-bold">НАШ ДОМ</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Профессиональное управление многоквартирными домами с 2005 года
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/70">
                <li><button onClick={() => setActiveSection('about')} className="hover:text-white transition-colors">О компании</button></li>
                <li><button onClick={() => setActiveSection('services')} className="hover:text-white transition-colors">Услуги</button></li>
                <li><button onClick={() => setActiveSection('houses')} className="hover:text-white transition-colors">Наши дома</button></li>
                <li><button onClick={() => setActiveSection('news')} className="hover:text-white transition-colors">Новости</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Сервисы</h4>
              <ul className="space-y-2 text-white/70">
                <li><button onClick={() => setActiveSection('cabinet')} className="hover:text-white transition-colors">Личный кабинет</button></li>
                <li><button onClick={() => setActiveSection('cabinet')} className="hover:text-white transition-colors">Передать показания</button></li>
                <li><button onClick={() => setActiveSection('cabinet')} className="hover:text-white transition-colors">Подать заявку</button></li>
                <li><button onClick={() => setActiveSection('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+78121234567" className="hover:text-white transition-colors">+7 (812) 123-45-67</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@nashdom.ru" className="hover:text-white transition-colors">info@nashdom.ru</a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-1" />
                  <span>г. Санкт-Петербург,<br />ул. Примерная, д. 1</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p>© 2025 УК «НАШ ДОМ». Все права защищены. Лицензия № 12345 от 01.01.2005</p>
          </div>
        </div>
      </footer>
    </div>
  );
}