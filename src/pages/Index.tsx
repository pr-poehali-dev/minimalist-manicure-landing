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
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF5F0] via-[#FFE8E1] to-[#F4C7AB]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#E8B4B8] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F4C7AB] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-md">
                  <Icon name="Sparkles" size={16} className="text-[#D4AF37]" />
                  Премиум услуги маникюра
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800 leading-tight">
                Идеальный<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B4B8] to-[#D4AF37]">
                  маникюр
                </span><br />
                для вас
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-lg leading-relaxed">
                Профессиональный мастер с 5+ летним опытом в Екатеринбурге. 
                Создаю красоту, которая подчеркивает вашу индивидуальность.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#F4C7AB] to-[#E8B4B8] hover:shadow-2xl hover:scale-105 text-gray-800 font-semibold px-10 py-7 text-lg rounded-2xl shadow-xl transition-all duration-300"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на приём
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white font-semibold px-10 py-7 text-lg rounded-2xl transition-all duration-300"
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Image" size={20} className="mr-2" />
                  Портфолио
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '500+', label: 'Довольных клиентов' },
                  { number: '5+', label: 'Лет опыта' },
                  { number: '100%', label: 'Качество' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gray-800">{stat.number}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/2271ee24-183b-4fb3-b69e-d733250e301b/files/85d2f335-7e3b-4011-be9b-ac6bed4a7ab4.jpg"
                  alt="Премиальный маникюр"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F4C7AB] to-[#E8B4B8] rounded-xl flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">4.9/5.0</div>
                    <div className="text-sm text-gray-600">Рейтинг клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-gray-400" />
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

      <section id="portfolio" className="py-20 max-w-6xl mx-auto px-4">
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