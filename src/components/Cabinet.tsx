import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Cabinet() {
  const [meterReadings, setMeterReadings] = useState({
    coldWater: '',
    hotWater: '',
    electricity: '',
    address: '',
    phone: ''
  });

  const [requestForm, setRequestForm] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleMeterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Показания успешно отправлены!');
    setMeterReadings({ coldWater: '', hotWater: '', electricity: '', address: '', phone: '' });
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Ваша заявка принята! Мы свяжемся с вами в ближайшее время.');
    setRequestForm({ name: '', phone: '', address: '', message: '' });
  };

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Icon name="User" className="text-primary" size={40} />
          </div>
          <div className="inline-block relative">
            <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent drop-shadow-sm">Личный кабинет</h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-primary rounded-full"></div>
          </div>
          <p className="text-lg text-muted-foreground mt-6">Управляйте услугами онлайн</p>
        </div>

        <Tabs defaultValue="meters" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="meters">Передать показания</TabsTrigger>
            <TabsTrigger value="request">Подать заявку</TabsTrigger>
          </TabsList>

          <TabsContent value="meters">
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Передача показаний счётчиков</CardTitle>
                <CardDescription>Отправьте показания онлайн быстро и удобно</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMeterSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
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
                        className="h-12"
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
                        className="h-12"
                        required
                      />
                    </div>

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
                        className="h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="meterAddress">Адрес</Label>
                      <Input
                        id="meterAddress"
                        placeholder="ул. Невская, д. 15, кв. 42"
                        value={meterReadings.address}
                        onChange={(e) => setMeterReadings(prev => ({ ...prev, address: e.target.value }))}
                        className="h-12 mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="meterPhone">Телефон</Label>
                      <Input
                        id="meterPhone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={meterReadings.phone}
                        onChange={(e) => setMeterReadings(prev => ({ ...prev, phone: e.target.value }))}
                        className="h-12 mt-2"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить показания
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Показания принимаются с 20 по 25 число каждого месяца
                  </p>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="request">
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Подать заявку</CardTitle>
                <CardDescription>Опишите вашу проблему, мы оперативно на неё отреагируем</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRequestSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="requestName">Ваше имя</Label>
                      <Input
                        id="requestName"
                        placeholder="Иван Иванов"
                        value={requestForm.name}
                        onChange={(e) => setRequestForm(prev => ({ ...prev, name: e.target.value }))}
                        className="h-12 mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="requestPhone">Телефон</Label>
                      <Input
                        id="requestPhone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={requestForm.phone}
                        onChange={(e) => setRequestForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="h-12 mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="requestAddress">Адрес</Label>
                    <Input
                      id="requestAddress"
                      placeholder="ул. Невская, д. 15, кв. 42"
                      value={requestForm.address}
                      onChange={(e) => setRequestForm(prev => ({ ...prev, address: e.target.value }))}
                      className="h-12 mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="requestMessage">Описание проблемы</Label>
                    <Textarea
                      id="requestMessage"
                      placeholder="Опишите подробно суть вашего обращения..."
                      value={requestForm.message}
                      onChange={(e) => setRequestForm(prev => ({ ...prev, message: e.target.value }))}
                      className="min-h-32 mt-2"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}