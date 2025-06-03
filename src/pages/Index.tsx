import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">TESLA</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Model S
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Model 3
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Model X
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Model Y
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Solar Roof
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Solar Panels
              </a>
            </div>
            <div className="hidden md:flex space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Поддержка
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Магазин
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Аккаунт
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Model S
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Дальность хода до 652 км. Разгон 0-100 км/ч за 2,1 секунды
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Заказать сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white transition-all duration-300"
            >
              Тест-драйв
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Наши модели
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Model S",
                description: "Премиальный седан",
                image:
                  "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                price: "от 8 999 000 ₽",
              },
              {
                name: "Model 3",
                description: "Популярный седан",
                image:
                  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                price: "от 3 999 000 ₽",
              },
              {
                name: "Model X",
                description: "Премиальный кроссовер",
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                price: "от 11 999 000 ₽",
              },
              {
                name: "Model Y",
                description: "Компактный кроссовер",
                image:
                  "https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                price: "от 5 999 000 ₽",
              },
            ].map((car, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">
                    {car.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {car.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold mb-4">{car.price}</p>
                  <Button className="w-full bg-black hover:bg-gray-800 transition-colors">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">652км</div>
              <div className="text-gray-300">Максимальная дальность</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">2.1с</div>
              <div className="text-gray-300">Разгон 0-100 км/ч</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">
                322км/ч
              </div>
              <div className="text-gray-300">Максимальная скорость</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Автомобили</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Model S
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Model 3
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Model X
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Model Y
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Энергия</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Solar Panels
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Solar Roof
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Powerwall
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Зарядка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Зарядные станции
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Домашняя зарядка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Supercharger
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Инвесторы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Новости
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tesla, Inc. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
