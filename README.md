# Ruzafa Vintage · Taller de Restauración Artesanal en València

Aplicación web de producción diseñada y desarrollada a medida para **Ruzafa Vintage** (**María José Martínez**), taller artesanal ubicado en **Carrer de Puerto Rico, 33, Bajo Derecha, 46006 València (Barrio de Ruzafa / L'Eixample)**, especializado en la restauración de mobiliario de los años 50, 60, 70 y 80 y en la recuperación y electrificación de lámparas de araña clásicas.

## 1. Arquitectura y Stack Tecnológico
- **Framework:** Next.js 16.4 (App Router) + React 19 + TypeScript 5.
- **Estilos y Dirección de Arte:** Tailwind CSS v4 con sistema tipográfico editorial (`Cormorant Garamond`, `Plus Jakarta Sans`, `JetBrains Mono`) y paleta inspirada en talleres de ebanistería y bronce envejecido (`#F7F4EE`, `#EFEAE0`, `#1C1917`, `#9A6B32`, `#181512`).
- **Internacionalización Ligera (ES / VAL):** Soporte bilingüe Español / Valencià mediante `src/context/LanguageContext.tsx` sin duplicación de rutas ni componentes.
- **Backend y Validación Real:** Endpoint `POST /api/presupuesto` (`src/app/api/presupuesto/route.ts`) con sanitización de entradas, validación estricta en cliente y servidor, campo *honeypot* anti-spam, control de frecuencia por IP, persistencia local en `data/solicitudes-presupuesto.json` e integración lista para Resend (`RESEND_API_KEY`) o Webhook (`CONTACT_WEBHOOK_URL`).
- **SEO Local Técnico:** Datos estructurados JSON-LD (`HomeAndConstructionBusiness`), `sitemap.xml` dinámico, `robots.txt`, Open Graph y páginas legales adaptadas a España (`/aviso-legal`, `/privacidad`, `/cookies`).

## 2. Cómo Ejecutar el Proyecto Localmente

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar versión de producción y verificar tipos
npm run build

# 4. Iniciar servidor de producción
npm run start
```

## 3. Variables de Entorno (`.env.local`)
Copia el archivo `.env.example` a `.env.local` si deseas activar el envío de correos transaccionales mediante Resend o un Webhook externo:
- `RESEND_API_KEY`: Clave API de Resend para enviar cada solicitud al correo `info@ruzafavintage.es`.
- `CONTACT_NOTIFICATION_EMAIL`: Correo receptor (por defecto `info@ruzafavintage.es`).
- `CONTACT_WEBHOOK_URL`: URL de webhook opcional para integrar con CRM/automatizaciones.

## 4. Elementos que el Propietario Debe Verificar Antes de Publicar
1. **NIF / CIF fiscal del titular:** Sustituir el marcador `[PENDIENTE DE COMPLETAR POR EL TITULAR ANTES DE SU PUBLICACIÓN]` en `/aviso-legal` y `/privacidad`.
2. **Fotografías propias del taller:** Las imágenes actuales están explícitamente identificadas como *fotografías ilustrativas de referencia técnica*. Se recomienda incorporar fotografías propias de María José Martínez en el taller de C/ Puerto Rico, 33.
3. **Configuración DNS del dominio `ruzafavintage.es`:** Apuntar los registros `A` / `CNAME` al proveedor de despliegue (Vercel, Railway o servidor propio con Node.js).
