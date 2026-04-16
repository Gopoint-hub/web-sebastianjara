import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Mentoria from "./pages/Mentoria";
import Postular from "./pages/Postular";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/mentoria"} component={Mentoria} />
        <Route path={"/sobre-mi"} component={About} />
        <Route path={"/trabajemos"} component={Postular} />
        <Route path={"/preguntas"} component={FAQ} />
        {/* Redirects from old routes */}
        <Route path={"/aplicar"}>{() => <Redirect to="/trabajemos" />}</Route>
        <Route path={"/metodo"}>{() => <Redirect to="/mentoria" />}</Route>
        <Route path={"/con-quien-trabajo"}>{() => <Redirect to="/" />}</Route>
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
