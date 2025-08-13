import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MessageSquare, Share2, Zap, Shield, Workflow } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/favicon-openindustrial.svg"
              alt="Open Industrial"
              width={200}
              height={36}
              className="h-9 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#integration" className="text-slate-300 hover:text-white transition-colors">
              Integration
            </a>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
            >
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20">
            AI-Powered Industrial Intelligence
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ask anything about your plant –{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              get answers instantly
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect industrial systems. Stream telemetry data. Ask questions in plain English — no pipelines needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="relative max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden border border-slate-700/50 shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OI%20Product%20Screenshot-PVqz57FUBbdifMw6PeB2BE9sDVfDV3.png"
                alt="Open Industrial Platform Interface showing Azi chat, data flow visualization, and real-time monitoring"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-lg pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Connect Your Data. Ask Anything. Share Anywhere.</h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Open Industrial connects your existing industrial systems and lets engineers ask real questions about plant
            data. It ingests live telemetry from SCADA, DCS, MES, historians, and LIMS — making it instantly queryable
            through natural language, APIs, and dashboards.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">1. Connect Your Data</h3>
                <p className="text-slate-300 mb-4">Stream live telemetry via OPC UA, MQTT, SQL, or CSV.</p>
                <div className="text-sm text-slate-400">
                  <br />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">2. Ask Azi</h3>
                <p className="text-slate-300 mb-4">
                  Query your plant's data in plain English. Azi translates your intent into KQL and instantly returns
                  explainable, actionable results.
                </p>
                <div className="text-sm text-slate-400">
                  <br />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">3. Share & Integrate</h3>
                <p className="text-slate-300 mb-4">
                  Save any query as a reusable API endpoint for dashboards, reports, or integration into other systems.
                </p>
                <div className="text-sm text-slate-400">
                  <br />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Azi */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Azi — Your AI Query Assistant</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Azi gives engineers direct access to live plant insights — no scripts, no SQL, no waiting on IT or vendor
              support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">"Show flow anomalies for Line 4 over the past 24 hours"</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">"Compare batch temperatures for Reactor 2"</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">"List top causes of downtime last week"</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-300">Built for real-time telemetry</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-300">
                Translates questions into KQL — Microsoft's query language for exploring and analyzing telemetry data
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-300">Explains every query and its results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section id="integration" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Works with Your Existing Stack</h2>
            <p className="text-lg text-slate-300">Just connect and query.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Protocols</h3>
              <ul className="space-y-2 text-slate-300">
                <li>OPC UA</li>
                <li>MQTT</li>
                <li>REST</li>
                <li>SQL</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Middleware</h3>
              <ul className="space-y-2 text-slate-300">
                <li>HighByte</li>
                <li>HiveMQ</li>
                <li>Ignition</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Systems</h3>
              <ul className="space-y-2 text-slate-300">
                <li>DCS, MES, SCADA, LIMS</li>
                <li>(such as DeltaV and Syncade)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Apps</h3>
              <ul className="space-y-2 text-slate-300">
                <li>Mobius suite</li>
                <li>(ProofCheck™, AlertTrack+, QuickView+)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Control */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Your Cloud, Your Rules</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Run Open Industrial in your Azure tenant for full access and control – or choose from shared cloud or
              fully managed options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300">Your data, your access policies</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-slate-300">Full auditability and governance</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-slate-300">Secure APIs with token-scoped permissions</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-orange-400" />
              <span className="text-slate-300">Automated, seamless setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">From Insight to Action</h2>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto">
              Open Industrial is evolving into a modular automation platform with adaptive agents that observe data,
              trigger workflows, and coordinate logic across systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Soon, you'll be able to:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Define schema-aware workflows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Deploy adaptive agents that monitor, respond, and evolve</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">Coordinate action across MES, SCADA, LIMS, and cloud systems</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Workflow className="w-16 h-16 text-white" />
              </div>
              <p className="text-xl text-slate-300 font-medium">
                Start with questions. Grow into orchestration. All inside your own stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Industrial Data?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect your systems, ask questions in plain English, and get instant insights from your plant data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/favicon-openindustrial.svg"
                alt="Open Industrial"
                width={200}
                height={36}
                className="h-9 w-auto"
              />
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
            <p>&copy; 2024 Open Industrial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
