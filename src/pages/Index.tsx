import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const services = [
    {
      icon: 'Sparkles',
      title: 'Классический маникюр',
      price: 'от 1500₽',
      description: 'Уход за кутикулой, придание формы, покрытие'
    },
    {
      icon: 'Palette',
      title: 'Дизайн',
      price: 'от 2500₽',
      description: 'Художественная роспись, слайдеры, стразы'
    },
    {
      icon: 'Gem',
      title: 'Гель / Акрил',
      price: 'от 2000₽',
      description: 'Укрепление, наращивание, коррекция'
    },
    {
      icon: 'Eraser',
      title: 'Снятие покрытия',
      price: 'от 500₽',
      description: 'Бережное удаление гель-лака'
    }
  ];

  const portfolio = [
    'https://cdn.poehali.dev/projects/2271ee24-183b-4fb3-b69e-d733250e301b/files/bb66e684-4743-412a-adab-c3b592bac221.jpg',
    'https://cdn.poehali.dev/projects/2271ee24-183b-4fb3-b69e-d733250e301b/files/f4ef1798-e588-4537-98f5-e1bd8d9daf5c.jpg',
    'https://cdn.poehali.dev/projects/2271ee24-183b-4fb3-b69e-d733250e301b/files/bb66e684-4743-412a-adab-c3b592bac221.jpg',
    'https://cdn.poehali.dev/projects/2271ee24-183b-4fb3-b69e-d733250e301b/files/f4ef1798-e588-4537-98f5-e1bd8d9daf5c.jpg',
    'https://cdn.poehali.dev/projects/2271ee24-183b-4fb3-b69e-d733250e301b/files/bb66e684-4743-412a-adab-c3b592bac221.jpg',
    'https://cdn.poehali.dev/projects/2271ee24-183b-4fb3-b69e-d733250e301b/files/f4ef1798-e588-4537-98f5-e1bd8d9daf5c.jpg'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFF8F5] to-white">
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(244, 199, 171, 0.3) 0%, rgba(232, 180, 184, 0.3) 100%), url('https://cdn.poehali.dev/projects/2271ee24-183b-4fb3-b69e-d733250e301b/files/bdf83f86-597d-4732-ba8e-57ed88724aba.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 py-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight">
            Идеальный маникюр<br />для вас
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
            Профессиональный мастер в Екатеринбурге
          </p>
          <Button 
            size="lg" 
            className="bg-[#F4C7AB] hover:bg-[#E8B4B8] text-gray-800 font-medium px-10 py-6 text-lg rounded-full shadow-lg hover-scale"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Записаться на приём
          </Button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">О мастере</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            5+ лет опыта работы с ногтями. Использую только премиальные материалы 
            и придерживаюсь индивидуального подхода к каждому клиенту. 
            Ваш комфорт и красота — моя главная цель.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'Award', text: '5+ лет опыта' },
            { icon: 'Shield', text: 'Стерильность' },
            { icon: 'Heart', text: 'Индивидуальный подход' }
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-md hover-scale bg-white/80 backdrop-blur">
              <CardContent className="pt-8 text-center">
                <Icon name={item.icon} className="mx-auto mb-4 text-[#D4AF37]" size={40} />
                <p className="text-lg font-medium text-gray-800">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-[#FFF8F5] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">Услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="border-none shadow-lg hover-scale bg-white">
                <CardHeader>
                  <div className="mb-4">
                    <Icon name={service.icon} className="text-[#F4C7AB]" size={48} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-2xl font-semibold text-[#D4AF37] mt-2">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">Портфолио</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolio.map((img, i) => (
            <div 
              key={i} 
              className="relative aspect-square overflow-hidden rounded-2xl shadow-md hover-scale cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Работа ${i + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="bg-gradient-to-b from-[#FFF8F5] to-white py-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Запись на приём</h2>
          <p className="text-center text-gray-600 mb-12">Заполните форму, и я свяжусь с вами в ближайшее время</p>
          
          <Card className="border-none shadow-xl bg-white">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Ваше имя</Label>
                  <Input 
                    id="name"
                    placeholder="Анна"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="border-gray-200 focus:border-[#F4C7AB]"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">Телефон</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="+7 (900) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="border-gray-200 focus:border-[#F4C7AB]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-gray-700">Желаемая дата</Label>
                  <Input 
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="border-gray-200 focus:border-[#F4C7AB]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">Комментарий</Label>
                  <Textarea 
                    id="message"
                    placeholder="Укажите желаемую услугу или задайте вопрос"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="border-gray-200 focus:border-[#F4C7AB] min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-[#F4C7AB] hover:bg-[#E8B4B8] text-gray-800 font-medium py-6 rounded-full"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">ManiArt</h3>
              <p className="text-gray-600">Профессиональный маникюр в Екатеринбурге</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (900) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  Екатеринбург, ул. Ленина 1
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-[#F4C7AB] transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#F4C7AB] transition-colors">
                  <Icon name="MessageCircle" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm border-t border-gray-100 pt-8">
            © 2026 ManiArt. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
