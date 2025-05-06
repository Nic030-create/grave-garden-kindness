
import React from 'react';
import { TreeDeciduous, Sun, Flower } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ValueSection = () => {
  return (
    <section id="service" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">Unser flexibler Grabpflege Service – monatlich kündbar</h2>
          <p className="text-lg text-muted-foreground">
            Mit unserem Service können Sie sicher sein, dass die letzte Ruhestätte Ihrer Lieben in liebevoller Pflege bleibt.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Gleichzeitig unterstützen Sie eine gute Sache: Durch unsere Arbeit schaffen wir Arbeitsplätze für Menschen, die auf dem traditionellen Arbeitsmarkt oft Schwierigkeiten haben. Unter anderem betrifft dies oft Menschen mit Behinderung, Rentner und Studierende und Menschen.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            Damit fördern Sie gleichzeitig auch die soziale Integration und Teilhabe dieser Menschen in unserer Gesellschaft.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="bg-white/80 border border-nature-100 shadow-sm hover:shadow-md transition-soft">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-nature-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Flower className="h-8 w-8 text-nature-500" />
              </div>
              <CardTitle className="text-xl font-medium">Flexible Pflege</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground text-base">
                Monatlich kündbares Abonnement ohne langfristige Verpflichtungen. Passen Sie den Service an Ihre Bedürfnisse an.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 border border-nature-100 shadow-sm hover:shadow-md transition-soft">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-calm-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Sun className="h-8 w-8 text-calm-500" />
              </div>
              <CardTitle className="text-xl font-medium">Transparenz</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground text-base">
                Erhalten Sie regelmäßige Foto-Updates der gepflegten Grabstätte und wissen Sie immer, wie der aktuelle Pflegezustand ist.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 border border-nature-100 shadow-sm hover:shadow-md transition-soft">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto bg-warmth-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <TreeDeciduous className="h-8 w-8 text-warmth-600" />
              </div>
              <CardTitle className="text-xl font-medium">Soziale Wirkung</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-muted-foreground text-base">
                Unterstützen Sie Menschen, die Schwierigkeiten haben, Arbeit zu finden, wie Rentner, Studierende und Menschen mit Behinderung.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto" id="about">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden h-80">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1287&q=80" 
                alt="Grabstätte mit Blumengestecken" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-foreground">Unsere Mission</h3>
              <p className="text-muted-foreground">
                Wir glauben, dass die Pflege der letzten Ruhestätte unserer Lieben ein wichtiger Teil des Gedenkens ist.
                Gleichzeitig wissen wir, dass nicht jeder die Zeit oder die Möglichkeit hat, regelmäßig das Grab zu besuchen und zu pflegen.
              </p>
              <p className="text-muted-foreground">
                Mit unserem Service unterstützen wir au­ßer­dem Menschen, die oft Schwierigkeiten haben eine Beschäftigung zu finden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
