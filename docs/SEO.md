# Configuración de SEO y Metadatos - Intelexia Labs

Este documento detalla la estructura de metadatos, optimización para motores de búsqueda (SEO) y tarjetas de previsualización social (Open Graph y Twitter Cards) configuradas para la plataforma.

---

## 1. Configuración Principal (`index.html`)

| Elemento | Valor / Configuración |
| :--- | :--- |
| **Idioma (`lang`)** | `es` (Español) |
| **Título (`<title>`)** | `Nube Corporativa Privada — IaaS · COTAS × Intelexia Labs` |
| **Descripción (`description`)** | `Infraestructura como Servicio (IaaS) alojada en Bolivia. Nube privada corporativa con fibra óptica dedicada, soberanía de datos y soporte experto local. COTAS × Intelexia Labs by IT911.` |
| **Palabras Clave (`keywords`)** | `IaaS Bolivia, Nube Privada Bolivia, COTAS Intelexia Labs, Infraestructura como Servicio Santa Cruz, Cloud Corporativo Bolivia, IT911` |
| **Autor (`author`)** | `Intelexia Labs by IT911 & COTAS` |
| **Favicon Oficial** | `rel="icon"`, `rel="shortcut icon"`, `rel="apple-touch-icon"` apuntando al logo oficial (`78c24084-f5b3-4072-816f-9c02d6ab72eb.png`) |

---

## 2. Redes Sociales y Previsualización (Open Graph & Twitter Cards)

- **`og:type`**: `website`
- **`og:title`**: `Nube Corporativa Privada — IaaS · COTAS × Intelexia Labs`
- **`og:description`**: `Infraestructura como Servicio (IaaS) alojada en Bolivia con fibra óptica dedicada, soberanía de datos y soporte local 24/7.`
- **`og:image` / `twitter:image`**: `https://otherbrain-tech-ob-files-oficial.ddt6vc.easypanel.host/api/files/78c24084-f5b3-4072-816f-9c02d6ab72eb.png`
- **`twitter:card`**: `summary_large_image`

---

## 3. Historial de Limpieza

- Se eliminaron etiquetas residuales heredadas de plantillas:
  - Etiqueta `<title>Base44 APP</title>` que sobreescribía el título real.
  - Enlace al favicon `https://base44.com/logo_v2.svg`.
  - Manifest no utilizado.
