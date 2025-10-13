import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {Toaster} from "react-hot-toast";

import AppLayout from "./pages/AppLayout";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        }
    }
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route index element={<Navigate replace to="dashboard" />} />
                        <Route path="clientes" element={<Clientes />} />
                        <Route path="configuracoes" element={<Configuracoes />} />
                        <Route path="contratos" element={<Contratos />} />
                        <Route path="financeiro" element={<Financeiro />} />
                        <Route path="lembretes" element={<Lembretes />} />
                        <Route path="login" element={<Login />} />
                        <Route path="relatorios" element={<Relatorios />} />
                        <Route path="viagens" element={<Viagens />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}