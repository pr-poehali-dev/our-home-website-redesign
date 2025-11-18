import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-sm">Контакты</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground mt-6">Мы всегда на связи</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-0 shadow-lg mb-6">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" />
                  Офис компании
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">Адрес:</p>
                  <p className="text-muted-foreground">г. Санкт-Петербург, ул. Примерная, д. 1, офис 101</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Режим работы:</p>
                  <p className="text-muted-foreground">Понедельник - Пятница: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Суббота: 10:00 - 16:00</p>
                  <p className="text-muted-foreground">Воскресенье: выходной</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { dept: 'Диспетчерская', phone: '+7 (812) 123-45-67', icon: 'Phone' },
                { dept: 'Бухгалтерия', phone: '+7 (812) 123-45-68', icon: 'Calculator' },
                { dept: 'Приёмная', phone: '+7 (812) 123-45-69', icon: 'Users' },
                { dept: 'Техническая служба', phone: '+7 (812) 123-45-70', icon: 'Wrench' }
              ].map((contact, idx) => (
                <Card key={idx} className="border-0 shadow-lg">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={contact.icon} className="text-primary" size={20} />
                      </div>
                      <p className="font-semibold text-sm">{contact.dept}</p>
                    </div>
                    <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="text-lg font-bold text-primary hover:underline">
                      {contact.phone}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
              <CardDescription>Напишите нам, мы ответим в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="contactName">Ваше имя</Label>
                  <Input
                    id="contactName"
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                    className="h-12 mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contactPhone">Телефон</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="h-12 mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="example@mail.ru"
                    value={form.email}
                    onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                    className="h-12 mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contactMessage">Сообщение</Label>
                  <Textarea
                    id="contactMessage"
                    placeholder="Ваше сообщение..."
                    value={form.message}
                    onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                    className="min-h-32 mt-2"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-12">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}