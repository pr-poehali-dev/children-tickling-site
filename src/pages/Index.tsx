import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-pink-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/img/eddf4be9-eb28-407a-a5be-d521ff81b053.jpg" 
              alt="Чудик-логотип" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold text-purple-800">ЩекоТун</h1>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6">
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-purple-800 mb-6 leading-tight">
            Счастливое детство<br />
            <span className="text-orange-500">начинается с смеха!</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Профессиональные услуги щекотания для детей от 3 до 12 лет. 
            Безопасно, весело и незабываемо!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg animate-scale-in">
              <Icon name="Phone" className="mr-2" />
              8-800-555-55-35
            </Button>
            <Button variant="outline" size="lg" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg">
              <Icon name="Play" className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-center text-purple-800 mb-12">Наши услуги</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover-scale bg-white/80 backdrop-blur border-purple-200 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">😊</div>
              <h4 className="text-xl font-semibold text-purple-700 mb-3">Классическое щекотание</h4>
              <p className="text-gray-600 mb-4">
                Традиционное щекотание ладошками и пальчиками. 
                Идеально для первого знакомства с нашими услугами.
              </p>
              <div className="text-2xl font-bold text-orange-500">от 1500₽</div>
            </CardContent>
          </Card>

          <Card className="hover-scale bg-white/80 backdrop-blur border-orange-200 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🪶</div>
              <h4 className="text-xl font-semibold text-purple-700 mb-3">Щекотание перышком</h4>
              <p className="text-gray-600 mb-4">
                Деликатное щекотание мягким перышком. 
                Для особо чувствительных деток.
              </p>
              <div className="text-2xl font-bold text-orange-500">от 2000₽</div>
            </CardContent>
          </Card>

          <Card className="hover-scale bg-white/80 backdrop-blur border-pink-200 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h4 className="text-xl font-semibold text-purple-700 mb-3">Театральное щекотание</h4>
              <p className="text-gray-600 mb-4">
                Щекотание с элементами театра и костюмами. 
                Незабываемое представление для вашего ребенка!
              </p>
              <div className="text-2xl font-bold text-orange-500">от 3500₽</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16 bg-white/50 rounded-3xl mx-4 my-8">
        <h3 className="text-4xl font-bold text-center text-purple-800 mb-12">Почему выбирают нас?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in">
            <Icon name="Shield" size={48} className="text-green-500 mx-auto mb-4" />
            <h4 className="font-semibold text-purple-700 mb-2">100% безопасно</h4>
            <p className="text-gray-600 text-sm">Сертифицированные специалисты</p>
          </div>
          <div className="text-center animate-fade-in">
            <Icon name="Heart" size={48} className="text-red-500 mx-auto mb-4" />
            <h4 className="font-semibold text-purple-700 mb-2">С любовью</h4>
            <p className="text-gray-600 text-sm">Индивидуальный подход</p>
          </div>
          <div className="text-center animate-fade-in">
            <Icon name="Clock" size={48} className="text-blue-500 mx-auto mb-4" />
            <h4 className="font-semibold text-purple-700 mb-2">Быстро</h4>
            <p className="text-gray-600 text-sm">Выезд в течение часа</p>
          </div>
          <div className="text-center animate-fade-in">
            <Icon name="Star" size={48} className="text-yellow-500 mx-auto mb-4" />
            <h4 className="font-semibold text-purple-700 mb-2">5 звезд</h4>
            <p className="text-gray-600 text-sm">1000+ довольных клиентов</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-4xl font-bold text-purple-800 mb-8">Готовы подарить радость?</h3>
        <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl p-8 text-white max-w-2xl mx-auto">
          <p className="text-xl mb-6">Звоните прямо сейчас!</p>
          <div className="text-4xl font-bold mb-6 tracking-wider">
            8-800-555-55-35
          </div>
          <p className="text-purple-100 mb-6">Бесплатно по всей России • Работаем 24/7</p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4">
            <Icon name="MessageCircle" className="mr-2" />
            Написать в WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img 
            src="/img/eddf4be9-eb28-407a-a5be-d521ff81b053.jpg" 
            alt="Чудик-логотип" 
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-semibold">ЩекоТун</span>
        </div>
        <p className="text-sm">© 2024 ЩекоТун. Делаем детство ярче!</p>
      </footer>
    </div>
  );
}