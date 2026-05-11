export const projectsData = [
  {
    id: 'erp-infra',
    title: 'Infraestructura Cloud & Zero Trust - ERP Central',
    shortDescription: 'Diseño y despliegue de arquitectura productiva en VPS con alta disponibilidad, protegida bajo políticas Zero Trust.',
    tags: ['Cloudflare Zero Trust', 'Docker Compose', 'Linux KVM', 'Nginx Proxy', 'Seguridad Redes'],
    censor: false,
    thumbnail: '/projects/ERP_Infraestructura/Captura de pantalla 2026-04-22 211620.png',
    media: [
      { type: 'image', url: '/projects/ERP_Infraestructura/Captura de pantalla 2026-04-22 211620.png' },
      { type: 'image', url: '/projects/ERP_Infraestructura/Captura de pantalla 2026-04-22 205959.png' },
      { type: 'image', url: '/projects/ERP_Infraestructura/Captura de pantalla 2026-04-22 210050.png' },
      { type: 'image', url: '/projects/ERP_Infraestructura/Captura de pantalla 2026-04-22 210343.png' }
    ],
    functionalSummary: `
      <h3>Visión de Negocio (Panel Central)</h3>
      <p>El Panel Central actúa como el corazón administrativo del ecosistema SaaS corporativo. Diseñado para simplificar la gestión multi-módulo, permite a los administradores gobernar todo el sistema (RRHH, Finanzas, Cosechas) desde una única interfaz intuitiva.</p>
      <ul>
        <li><strong>Control Unificado:</strong> Gestión centralizada de usuarios, permisos y entidades core del negocio.</li>
        <li><strong>Acceso Seguro:</strong> Todo el tráfico está protegido mediante políticas empresariales (Zero Trust), garantizando que solo el personal autorizado acceda.</li>
        <li><strong>Dashboard Ejecutivo:</strong> Vista rápida del estado de los servicios y métricas operativas críticas.</li>
      </ul>
    `,
    technicalSummary: `
      <h3>Arquitectura y Despliegue</h3>
      <p>La infraestructura está montada sobre un servidor VPS (KVM) corriendo Debian 12, orquestado completamente con Docker y protegido perimetralmente.</p>
      <ul>
        <li><strong>Red y Seguridad:</strong> Implementación de túneles encriptados (Cloudflare Tunnel) y WAF. Ningún puerto interno está expuesto a internet.</li>
        <li><strong>Orquestación:</strong> Red Docker compartida para microservicios. Nginx actúa como proxy inverso.</li>
        <li><strong>CI/CD:</strong> Despliegue automatizado zero-downtime mediante scripts personalizados y control de versiones.</li>
        <li><strong>Base de Datos:</strong> Instancia PostgreSQL 15 centralizada para todo el ecosistema.</li>
      </ul>
    `
  },
  {
    id: 'empaques-erp',
    title: 'SaaS ERP - Módulo Empaques y Liquidación',
    shortDescription: 'Plataforma empresarial de liquidación de sueldos y control de asistencia con escalado de producción dinámico.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Algoritmos RRHH', 'SaaS'],
    censor: false,
    thumbnail: '/projects/Empaques/Liquidaciones.png',
    media: [
      { type: 'image', url: '/projects/Empaques/Liquidaciones.png' },
      { type: 'image', url: '/projects/Empaques/Gestionar_personal.png' },
      { type: 'image', url: '/projects/Empaques/Matriz_Asistencia.png' },
      { type: 'image', url: '/projects/Empaques/Panel_Sucursal.png' },
      { type: 'image', url: '/projects/Empaques/Asistencia_Encargado.png' }
    ],
    functionalSummary: `
      <h3>Gestión Integral de RRHH y Pagos</h3>
      <p>Este sistema moderniza la liquidación de sueldos y control de asistencia en entornos de alta rotación (como plantas de empaque). Permite a los encargados cargar el presentismo desde sus celulares y a la administración realizar liquidaciones precisas en un clic.</p>
      <ul>
        <li><strong>Liquidación Inteligente:</strong> Cálculos automáticos de premios por producción, horas extra y ausentismos.</li>
        <li><strong>Gestión de Turnos y Roles:</strong> Asignación de jornadas simples, dobles o fraccionadas según el rendimiento del operario.</li>
        <li><strong>Interfaz Adaptativa:</strong> Panel gerencial para PC y vista móvil simplificada para encargados de planta.</li>
      </ul>
    `,
    technicalSummary: `
      <h3>Motor de Cálculo Complejo</h3>
      <p>Desarrollo full-stack diseñado para manejar lógica de negocio altamente dinámica y consistente.</p>
      <ul>
        <li><strong>Backend Java:</strong> API robusta construida con Spring Boot, gestionando transacciones ACID para garantizar la exactitud de los pagos.</li>
        <li><strong>Algoritmia:</strong> Implementación de cálculo de jornales fraccionados y categorización dinámica basada en matrices de producción.</li>
        <li><strong>Frontend:</strong> SPA en React con gestión de estado complejo para la matriz de asistencia masiva.</li>
        <li><strong>Persistencia:</strong> Diseño relacional avanzado en PostgreSQL para historizar tarifas y períodos de liquidación.</li>
      </ul>
    `
  },
  {
    id: 'qr-farer',
    title: 'Sistema de Validaciones QR - Farer',
    shortDescription: 'Aplicación web full-stack para el registro de asistentes, generación de tickets QR y escaneo en tiempo real en eventos.',
    tags: ['Node.js', 'Express', 'TailwindCSS', 'SQLite', 'WebRTC'],
    censor: false,
    thumbnail: '/projects/Sistema_QR_Farer/02_ticket_qr.png',
    media: [
      { type: 'video', url: '/projects/Sistema_QR_Farer/Sistema QR Farer.mp4' },
      { type: 'image', url: '/projects/Sistema_QR_Farer/02_ticket_qr.png' },
      { type: 'image', url: '/projects/Sistema_QR_Farer/03_validacion_exitosa.png' },
      { type: 'image', url: '/projects/Sistema_QR_Farer/04_interfaz_escaner.png' },
      { type: 'image', url: '/projects/Sistema_QR_Farer/05_login_page.png' }
    ],
    functionalSummary: `
      <h3>Control Total de Eventos sin Papel</h3>
      <p>Solución digital para reemplazar tickets físicos en eventos. Permite registrar invitados, generarles un código QR personalizado y validar su acceso y consumiciones desde cualquier celular.</p>
      <ul>
        <li><strong>Anti-Fraude:</strong> Códigos únicos irrepetibles generados al instante.</li>
        <li><strong>Escaneo Nativo:</strong> Utiliza la cámara del smartphone web, sin requerir instalación de apps en la Play/App Store.</li>
        <li><strong>Estadísticas en Vivo:</strong> Monitorización de aforo y consumo en tiempo real durante el evento.</li>
      </ul>
    `,
    technicalSummary: `
      <h3>Micro-Arquitectura Eficiente</h3>
      <p>Diseñado para ser ligero, ultra-rápido y resiliente, ideal para conectividades intermitentes.</p>
      <ul>
        <li><strong>Librerías Nativas:</strong> Integración de la API \`getUserMedia\` (WebRTC) para procesamiento de video a 10fps en el navegador.</li>
        <li><strong>Backend Node.js:</strong> Servidor Express.js orquestando validaciones con latencia menor a 50ms.</li>
        <li><strong>Canvas API:</strong> Generación programática de tickets visuales en alta resolución (1000x1400px) directamente en el backend.</li>
        <li><strong>Almacenamiento:</strong> Base de datos embebida (SQLite3) optimizada con soporte transaccional para evitar race-conditions en validaciones simultáneas.</li>
      </ul>
    `
  },
  {
    id: 'gosti-market',
    title: 'GosTI Market - POS & Facturación',
    shortDescription: 'Software de Punto de Venta (POS) en la nube con facturación rápida, inventario y dashboards financieros.',
    tags: ['Vite', 'React', 'Java Spring Boot', 'POS', 'UX/UI'],
    censor: false,
    thumbnail: '/projects/GosTI_Market/Dashboard.png',
    media: [
      { type: 'video', url: '/projects/GosTI_Market/2026-05-06 20-04-47.mp4' },
      { type: 'image', url: '/projects/GosTI_Market/Dashboard.png' },
      { type: 'image', url: '/projects/GosTI_Market/04_pos_cobro.png' },
      { type: 'image', url: '/projects/GosTI_Market/Catalogo_productos.png' },
      { type: 'image', url: '/projects/GosTI_Market/Detalle_caja.png' }
    ],
    functionalSummary: `
      <h3>Punto de Venta Moderno e Intuitivo</h3>
      <p>Plataforma para comercios minoristas que acelera el flujo de caja, con herramientas potentes para los dueños y uso simplificado para los cajeros.</p>
      <ul>
        <li><strong>Ventas Ultrarrápidas:</strong> Interfaz optimizada para el uso intensivo de teclado y lectores de códigos de barra.</li>
        <li><strong>Gestión de Inventario:</strong> Control de stock, costos y compras a proveedores.</li>
        <li><strong>Dashboards:</strong> Resúmenes financieros visuales con el estado de las cajas (aperturas/cierres).</li>
      </ul>
    `,
    technicalSummary: `
      <h3>Escalabilidad Comercial</h3>
      <p>Arquitectura orientada a la alta concurrencia transaccional.</p>
      <ul>
        <li><strong>Integración Fiscal (ARCA/AFIP):</strong> Base de desarrollo preparada para la emisión de facturación electrónica.</li>
        <li><strong>Arquitectura Multitenant:</strong> Diseño de base de datos relacional para soportar múltiples comercios de forma aislada.</li>
        <li><strong>Optimización UI:</strong> SPA desarrollada con React/Vite, enfocada en evitar renders innecesarios durante el proceso crítico de venta.</li>
      </ul>
    `
  },
  {
    id: 'empleados-admin',
    title: 'Módulo Core: Gestión de Empleados',
    shortDescription: 'Sistema base para la administración unificada de legajos, usuarios, roles y autenticación corporativa.',
    tags: ['Identity', 'Roles', 'Spring Security', 'CRUD Avanzado'],
    censor: false,
    thumbnail: '/projects/Empleados/Captura de pantalla 2026-04-17 071418.png',
    media: [
      { type: 'video', url: '/projects/Empleados/Sistema Empleados.mp4' },
      { type: 'image', url: '/projects/Empleados/Captura de pantalla 2026-04-17 071309.png' },
      { type: 'image', url: '/projects/Empleados/Captura de pantalla 2026-04-17 071418.png' },
      { type: 'image', url: '/projects/Empleados/Captura de pantalla 2026-04-17 071648.png' }
    ],
    functionalSummary: `
      <h3>Directorio Corporativo Unificado</h3>
      <p>El punto central de verdad para toda la gestión de recursos humanos de la compañía, desde donde se abren las cuentas para los demás sistemas del ecosistema.</p>
      <ul>
        <li><strong>Perfiles Completos:</strong> Alta de legajos con información personal, jerarquía y asignación de permisos.</li>
        <li><strong>Onboarding Simplificado:</strong> Creación rápida de usuarios vinculados a empleados físicos.</li>
        <li><strong>Trazabilidad:</strong> Auditoría de quién modificó qué dato dentro de la ficha de un empleado.</li>
      </ul>
    `,
    technicalSummary: `
      <h3>Seguridad y Gestión de Identidad</h3>
      <p>La base sólida de permisos de todo el ERP.</p>
      <ul>
        <li><strong>Spring Security:</strong> Implementación profunda de filtros de seguridad JWT y RBAC (Role-Based Access Control).</li>
        <li><strong>Soft Deletes:</strong> Mecanismos lógicos de eliminación para mantener la integridad referencial en toda la base de datos histórica.</li>
        <li><strong>Paginación Server-Side:</strong> Tablas reactivas optimizadas para manejar grandes volúmenes de empleados sin degradar el rendimiento del navegador.</li>
      </ul>
    `
  },
  {
    id: 'cosechas',
    title: 'Gestión Logística de Cosechas',
    shortDescription: 'Plataforma para trazabilidad y seguimiento en tiempo real del transporte y volumen de recolección agrícola.',
    tags: ['Logística', 'Maps/GPS', 'Data Visualization', 'PWA'],
    censor: false,
    thumbnail: '/projects/Cosechas/Captura de pantalla 2026-04-16 182810.png',
    media: [
      { type: 'video', url: '/projects/Cosechas/Cosechas Porfolio.mp4' },
      { type: 'image', url: '/projects/Cosechas/Captura de pantalla 2026-04-16 182810.png' },
      { type: 'image', url: '/projects/Cosechas/Captura de pantalla 2026-04-16 182822.png' },
      { type: 'image', url: '/projects/Cosechas/Captura de pantalla 2026-04-16 182930.png' },
      { type: 'image', url: '/projects/Cosechas/Captura de pantalla 2026-04-22 232640.png' }
    ],
    functionalSummary: `
      <h3>Trazabilidad de la Operación Agrícola</h3>
      <p>Control exacto del flujo de recolección desde la finca hasta los centros de procesamiento. Previene pérdidas, fraudes y cuellos de botella logísticos.</p>
      <ul>
        <li><strong>Gestión de Transportes:</strong> Asignación de vehículos y transportistas a diferentes fincas.</li>
        <li><strong>Registro de Cargas:</strong> Digitalización de los remitos de entrega y pesaje de la mercadería.</li>
        <li><strong>Visualización de Progreso:</strong> Gráficos que comparan el avance de la cosecha entre diferentes cuadrillas y lotes.</li>
      </ul>
    `,
    technicalSummary: `
      <h3>Integración y Sincronización</h3>
      <p>Un sistema resistente diseñado para ambientes rurales.</p>
      <ul>
        <li><strong>Progressive Web App (PWA):</strong> Capacidades offline-first que garantizan el funcionamiento de la carga de datos incluso sin señal de internet en el campo.</li>
        <li><strong>Cola de Sincronización:</strong> Algoritmo de resolución de conflictos cuando los dispositivos recuperan la conexión y envían lotes de transacciones.</li>
        <li><strong>Dashboards Reactivos:</strong> Implementación de librerías como Recharts/Chart.js para generar inteligencia de negocio visual al instante.</li>
      </ul>
    `
  }
];
