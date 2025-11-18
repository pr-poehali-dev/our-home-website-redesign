import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HousesProps {
  onNavigate: (section: string) => void;
}

export default function Houses({ onNavigate }: HousesProps) {
  const houses = [
    { id: 1, address: 'ул. Невская, 15', district: 'Центральный', apartments: 120, year: 1985, floors: 9 },
    { id: 2, address: 'пр. Победы, 82', district: 'Московский', apartments: 180, year: 1990, floors: 14 },
    { id: 3, address: 'ул. Садовая, 43', district: 'Адмиралтейский', apartments: 96, year: 1975, floors: 5 },
    { id: 4, address: 'наб. Фонтанки, 120', district: 'Центральный', apartments: 144, year: 1982, floors: 10 },
    { id: 5, address: 'пр. Стачек, 56', district: 'Кировский', apartments: 200, year: 1995, floors: 16 },
    { id: 6, address: 'ул. Ленина, 32', district: 'Выборгский', apartments: 108, year: 1978, floors: 9 }
  ];

  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-secondary mb-4">Наши дома</h2>
          <p className="text-lg text-muted-foreground">Дома под нашим управлением</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {houses.map((house) => (
            <Card key={house.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                      <Icon name="MapPin" size={24} className="text-primary" />
                      {house.address}
                    </CardTitle>
                    <Badge variant="secondary">{house.district} район</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Квартир</p>
                    <p className="text-lg font-semibold">{house.apartments}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Этажей</p>
                    <p className="text-lg font-semibold">{house.floors}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Год</p>
                    <p className="text-lg font-semibold">{house.year}</p>
                  </div>
                </div>
                <Button className="w-full" onClick={() => onNavigate('contacts')}>
                  Подать заявку на обслуживание
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
