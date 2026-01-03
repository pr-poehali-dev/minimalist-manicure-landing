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
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F0] via-[#FFE8E1] to-[#FFF5F0]">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF5F0] via-[#FFE8E1] to-[#F4C7AB]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#E8B4B8] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F4C7AB] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
            {/* Левая колонка с примерами работ */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-6">
              <div className="relative h-[280px] rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://cdn.poehali.dev/projects/2271ee24-183b-4fb3-b69e-d733250e301b/files/85d2f335-7e3b-4011-be9b-ac6bed4a7ab4.jpg"
                  alt="Работа 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="relative h-[280px] rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={portfolio[1]}
                  alt="Работа 2"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            {/* Центральная колонка с контентом */}
            <div className="lg:col-span-6 space-y-8 animate-fade-in text-center">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-md">
                  <Icon name="Sparkles" size={16} className="text-[#D4AF37]" />
                  Премиум студия маникюра
                </span>
              </div>
              
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-800 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8B4B8] via-[#D4AF37] to-[#F4C7AB]">
                  Linnark
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Превращаем ваши ногти в произведение искусства. 
                Премиальные материалы, авторские дизайны и безупречное качество. 
                Каждый визит — это роскошный опыт заботы о себе.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

              <div className="grid grid-cols-3 gap-6 pt-8 max-w-xl mx-auto">
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

            {/* Правая колонка с примерами работ */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-6">
              <div className="relative h-[280px] rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={portfolio[2]}
                  alt="Работа 3"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="relative h-[280px] rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={portfolio[3]}
                  alt="Работа 4"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Icon name="Star" size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                    <span className="text-sm font-bold text-gray-800">4.9/5.0</span>
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

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#E8B4B8] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#F4C7AB] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-md">
                <Icon name="User" size={16} className="text-[#D4AF37]" />
                О мастере
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">Профессионал с душой</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              5+ лет опыта работы с ногтями. Использую только премиальные материалы 
              и придерживаюсь индивидуального подхода к каждому клиенту. 
              Ваш комфорт и красота — моя главная цель.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'Award', title: '5+ лет опыта', desc: 'Постоянное обучение новым техникам' },
              { icon: 'Shield', title: 'Стерильность', desc: 'Все инструменты проходят обработку' },
              { icon: 'Heart', title: 'Индивидуальный подход', desc: 'Учитываю особенности ваших ногтей' }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4C7AB] to-[#E8B4B8] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <Card className="relative border-none shadow-2xl hover-scale bg-white/90 backdrop-blur-lg h-full">
                  <CardContent className="pt-10 pb-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#F4C7AB] to-[#E8B4B8] rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon name={item.icon} className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-40 w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-[#E8B4B8] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-md">
                <Icon name="Sparkles" size={16} className="text-[#D4AF37]" />
                Услуги
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Что я предлагаю</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4C7AB] to-[#E8B4B8] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <Card className="relative border-none shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 bg-white/90 backdrop-blur-lg h-full">
                  <CardHeader>
                    <div className="w-16 h-16 mb-4 bg-gradient-to-br from-[#F4C7AB] to-[#E8B4B8] rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon name={service.icon} className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E8B4B8] to-[#D4AF37] mt-3">
                      {service.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#F4C7AB] rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-md">
                <Icon name="Image" size={16} className="text-[#D4AF37]" />
                Портфолио
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Мои работы</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Каждый маникюр — произведение искусства</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {portfolio.map((img, i) => (
              <div 
                key={i} 
                className="group relative aspect-square overflow-hidden rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Работа ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">Работа #{i + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-20 w-96 h-96 bg-[#E8B4B8] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-[#F4C7AB] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-md">
                <Icon name="Calendar" size={16} className="text-[#D4AF37]" />
                Запись
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Записаться на приём</h2>
            <p className="text-xl text-gray-700">Заполните форму, и я свяжусь с вами в ближайшее время</p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F4C7AB] to-[#E8B4B8] rounded-3xl opacity-20 blur-2xl"></div>
            <Card className="relative border-none shadow-2xl bg-white/90 backdrop-blur-lg">
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
                  className="w-full bg-gradient-to-r from-[#F4C7AB] to-[#E8B4B8] hover:shadow-2xl hover:scale-105 text-gray-800 font-semibold py-7 text-lg rounded-2xl shadow-xl transition-all duration-300"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>

      <footer className="relative bg-gradient-to-b from-transparent to-white/50 backdrop-blur-lg border-t border-white/20 py-16">
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