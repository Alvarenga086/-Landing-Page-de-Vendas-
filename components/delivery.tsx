import { MapPin, Package } from 'lucide-react'

export function Delivery() {
  return (
    <section id="entrega" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Entregas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Como Receber sua Bolsa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Facilitamos ao máximo para que sua peça chegue até você com segurança e carinho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Local Delivery */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">
                Teresina e Região
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Realizamos entregas em Teresina e cidades próximas. Entre em contato para combinar 
              a melhor forma de entrega para você.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Entrega em mãos disponível
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Pontos de encontro combinados
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Atendimento personalizado
              </li>
            </ul>
          </div>

          {/* National Shipping */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">
                Todo o Brasil
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Enviamos para todos os estados do Brasil pelos Correios ou transportadoras, 
              com embalagem especial para proteger sua peça.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Envio pelos Correios
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Embalagem especial de proteção
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Código de rastreamento
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
