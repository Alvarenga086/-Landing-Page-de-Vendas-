import { Heart, Sparkles, Truck } from 'lucide-react'

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Nossa História
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Sobre a D&apos;luz & Miçangas
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Nascemos do amor pelo artesanato e da vontade de criar peças únicas que contam histórias. 
            Cada bolsa é feita à mão, com dedicação e carinho, para que você tenha um acessório 
            verdadeiramente especial.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
              Feito com Amor
            </h3>
            <p className="text-muted-foreground">
              Cada peça é criada com dedicação, garantindo qualidade e atenção aos mínimos detalhes.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
              Peças Únicas
            </h3>
            <p className="text-muted-foreground">
              Trabalho artesanal significa exclusividade. Sua bolsa será única, assim como você.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
              Envio Seguro
            </h3>
            <p className="text-muted-foreground">
              Entregamos em Teresina e região, além de enviar para todo o Brasil com total segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
