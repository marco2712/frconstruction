
# FR Construcción

Proyecto web desarrollado con React, TypeScript, Vite, TailwindCSS, Lucide React Icons y Framer Motion.

## Estructura del Proyecto

```
src/
├── assets/              # Recursos estáticos (imágenes, fuentes, iconos)
├── components/          # Componentes reutilizables
│   ├── common/          # Componentes comunes (botones, inputs, etc.)
│   └── layout/          # Componentes de layout (NavBar, Footer)
├── features/            # Funcionalidades por módulo (hero, about, services, etc.)
├── hooks/               # Custom React Hooks
├── i18n/                # Internacionalización y traducciones
├── styles/              # Estilos globales y modulares
├── types/               # Definiciones de tipos TypeScript
├── utils/               # Funciones auxiliares
├── App.tsx              # Componente principal
└── main.tsx             # Entry point
```

## Instalación y Uso

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

3. Compila para producción:

   ```bash
   npm run build
   ```

## Principales Tecnologías

- React 19 + TypeScript
- Vite
- TailwindCSS
- Lucide React Icons
- Framer Motion