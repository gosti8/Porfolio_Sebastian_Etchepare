export const projectsData = [
  {
    id: 'whatsapp-rrhh-bot',
    title: 'Bot de RRHH con IA - Asistente WhatsApp',
    shortDescription: 'Asistente virtual de WhatsApp con IA que automatiza el reclutamiento, la gestión de reclamos y la atención al empleado 24/7, con dashboard de control en tiempo real.',
    tags: ['IA / LLM', 'Function Calling', 'Node.js Baileys', 'Spring Boot', 'WhatsApp API', 'PostgreSQL'],
    censor: false,
    group: 'Service Company',
    thumbnail: '/projects/thumbnails/thumbnail_bot.png',
    media: [
      { type: 'image', url: '/projects/Bot_WhatsApp/01_Conversaciones.png' },
      { type: 'image', url: '/projects/Bot_WhatsApp/02_Chat_IA_Reclutamiento.png' },
      { type: 'image', url: '/projects/Bot_WhatsApp/03_Chat_Handoff_Humano.png' },
      { type: 'image', url: '/projects/Bot_WhatsApp/04_Postulantes.png' },
      { type: 'image', url: '/projects/Bot_WhatsApp/05_Reclamos.png' }
    ],
    functionalSummary: `
      <h3>Reclutamiento y Atención al Empleado Automatizados</h3>
      <p>Las áreas de RRHH con alto volumen de personal se saturan con tareas repetitivas: responder las mismas consultas, recibir currículums por múltiples canales y canalizar reclamos internos. Este Asistente Virtual por WhatsApp, integrado con Inteligencia Artificial, actúa como el primer punto de contacto 24/7 para candidatos y empleados.</p>
      <ul>
        <li><strong>Reclutamiento Automatizado:</strong> El bot entrevista de forma natural a los postulantes, recolecta sus datos clave (nombre, CUIL, experiencia, disponibilidad) y los registra automáticamente en una base centralizada lista para revisar.</li>
        <li><strong>Gestión de Reclamos sin Fricciones:</strong> Los empleados ingresan quejas o reclamos (errores de liquidación, problemas de infraestructura) por chat. El bot clasifica la urgencia y envía alertas inmediatas a los responsables.</li>
        <li><strong>Resolución de FAQs con IA:</strong> Un modelo de lenguaje avanzado entiende el contexto y responde al instante, reduciendo la carga de consultas básicas en más de un 80%.</li>
        <li><strong>Escalamiento a Humanos (Hand-off):</strong> Si una situación requiere sensibilidad o el usuario lo solicita, el bot transfiere la conversación en tiempo real a un operador humano.</li>
        <li><strong>Panel de Control Centralizado:</strong> Interfaz web moderna y responsiva desde la cual reclutadores y gerentes ven candidatos, administran reclamos, leen historiales completos y toman el control de las conversaciones.</li>
      </ul>
    `,
    technicalSummary: `
      <h3>Arquitectura de Microservicios Event-Driven con IA</h3>
      <p>Sistema escalable compuesto por un microservicio de integración con WhatsApp y un sistema central transaccional con panel de administración SSR, todo containerizado para desacoplar responsabilidades.</p>
      <ul>
        <li><strong>Gateway de Mensajería:</strong> Microservicio en Node.js + Express con Baileys (WebSockets de WhatsApp) que gestiona la sesión, el QR y la autenticación, retransmitiendo los mensajes al backend vía Webhooks REST. Esto aísla la fragilidad de las sesiones de WhatsApp de la robustez transaccional del core.</li>
        <li><strong>Core API (Spring Boot 3 / Java 21):</strong> Arquitectura en capas estricta (Controladores, Servicios, Repositorios) con Spring Data JPA y generación automática de esquemas vía Hibernate sobre PostgreSQL.</li>
        <li><strong>Function Calling (IA):</strong> El <code>LlmService</code> orquesta la conversación mediante LLMs (compatibles GPT/Claude) usando Tool Use. Cuando la IA reúne datos suficientes, emite un tool call que el backend procesa para ejecutar operaciones CRUD, garantizando la integridad de los datos.</li>
        <li><strong>Estado Conversacional Dinámico:</strong> Modelo de datos con <code>ConversationMode: AI | HUMAN</code> que permite interrumpir el loop del LLM en tiempo real cuando un operador toma la conversación desde el Dashboard.</li>
        <li><strong>Frontend Liviano:</strong> Dashboard 100% mobile-first con Thymeleaf y CSS moderno (Glassmorphism), sin librerías pesadas para minimizar el bundle del cliente.</li>
        <li><strong>Infraestructura:</strong> Docker & Docker Compose con redes aisladas y túneles cifrados (Cloudflare Zero Trust). Data Seeder vía <code>CommandLineRunner</code> para poblar entornos de QA y demo.</li>
      </ul>
    `
  },
  {
    id: 'erp-infra',
    title: 'Infraestructura Cloud & Zero Trust - ERP Central',
    shortDescription: 'Diseño y despliegue de arquitectura productiva en VPS con alta disponibilidad, protegida bajo políticas Zero Trust.',
    tags: ['Cloudflare Zero Trust', 'Docker Compose', 'Linux KVM', 'Crontab', 'Seguridad Redes'],
    censor: false,
    group: 'Service Company',
    thumbnail: '/projects/thumbnails/thumbnail_erp.png',
    media: [
      { type: 'image', url: '/projects/ERP_Infraestructura/Captura de pantalla 2026-04-22 211620.png' },
      { type: 'image', url: '/projects/ERP_Infraestructura/Captura de pantalla 2026-04-22 205959.png' },
      { type: 'image', url: '/projects/ERP_Infraestructura/Captura de pantalla 2026-04-22 210050.png' },
      { type: 'image', url: '/projects/ERP_Infraestructura/Captura de pantalla 2026-04-22 210122.png' },
      { type: 'image', url: '/projects/ERP_Infraestructura/Captura de pantalla 2026-04-22 210343.png' },
      { type: 'image', url: '/projects/ERP_Infraestructura/Captura de pantalla 2026-04-22 21044a0.png' },
      { type: 'image', url: '/projects/ERP_Infraestructura/Captura de pantalla 2026-04-22 210719.png' }
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
        <li><strong>Red y Seguridad:</strong> Implementación estricta de Cloudflare Zero Trust (Hub & Spoke). Ningún puerto interno está expuesto a internet de forma directa.</li>
        <li><strong>Copias de Seguridad:</strong> Automatización de respaldos de bases de datos y volúmenes a través de scripts en Bash programados con <code>crontab</code>, garantizando la integridad de la información ante desastres.</li>
        <li><strong>Orquestación:</strong> Red Docker compartida para microservicios.</li>
        <li><strong>CI/CD:</strong> Despliegue automatizado zero-downtime mediante scripts personalizados y control de versiones.</li>
        <li><strong>Base de Datos:</strong> Instancia PostgreSQL 15 centralizada para todo el ecosistema.</li>
      </ul>
    `
  },
  {
    id: 'empaques-erp',
    title: 'Sistema de Empaques y Liquidación',
    shortDescription: 'Plataforma empresarial de liquidación de sueldos y control de asistencia con capacidades Offline y escalado dinámico.',
    tags: ['React', 'PWA Offline', 'Spring Boot', 'PostgreSQL', 'Leyes Laborales', 'Cálculo de Haberes'],
    censor: false,
    group: 'Service Company',
    thumbnail: '/projects/thumbnails/thumbnail_empaques.png',
    media: [
      { type: 'image', url: '/projects/Empaques/Liquidaciones.png' },
      { type: 'image', url: '/projects/Empaques/Gestionar_personal.png' },
      { type: 'image', url: '/projects/Empaques/Matriz_Asistencia.png' },
      { type: 'image', url: '/projects/Empaques/Panel_Sucursal.png' },
      { type: 'image', url: '/projects/Empaques/Asistencia_Encargado.png' }
    ],
    functionalSummary: `
      <h3>Gestión Integral de RRHH y Pagos</h3>
      <p>Sistema diseñado específicamente para modernizar la liquidación de sueldos y el control de asistencia en entornos de alta rotación (como plantas de empaque y campo). Cumple rigurosamente con las leyes laborales aplicables al trabajo rural.</p>
      <ul>
        <li><strong>Reglas de Negocio y Leyes Laborales:</strong> Contempla el cálculo automático de feriados pagos, gestión de horas extras (al 50% y 100%), y reglas configurables para las jornadas de los días sábados.</li>
        <li><strong>Liquidación Inteligente:</strong> Permite calcular haberes bajo múltiples modalidades: jornal fijo, producción individual, producción grupal y mínimo garantizado.</li>
        <li><strong>Sincronización Automática:</strong> Se conecta con el sistema central de Empleados para obtener la nómina activa y las categorías actualizadas, evitando la doble carga manual de personal.</li>
        <li><strong>Capacidad Offline:</strong> Los encargados pueden registrar el presentismo y los movimientos desde sus celulares incluso sin conexión a internet en la planta, sincronizando todo al reconectarse.</li>
      </ul>
    `,
    technicalSummary: `
      <h3>Motor de Cálculo Complejo y Resiliencia</h3>
      <p>Desarrollo full-stack diseñado para manejar lógica de negocio altamente dinámica y consistente en entornos sin conexión fiable.</p>
      <ul>
        <li><strong>Arquitectura PWA y Sincronización:</strong> Uso avanzado de Service Workers e IndexedDB para permitir el funcionamiento de la aplicación móvil de encargados de forma Offline, aplicando un modelo de eventual consistency.</li>
        <li><strong>Backend Java:</strong> API robusta construida con Spring Boot, gestionando lógica de negocios crítica y previniendo colisiones de datos.</li>
        <li><strong>Algoritmia:</strong> Implementación de cálculo de jornales fraccionados y categorización dinámica basada en matrices de producción.</li>
        <li><strong>Frontend:</strong> SPA en React con gestión de estado complejo para la matriz de asistencia masiva.</li>
        <li><strong>Persistencia:</strong> Diseño relacional avanzado en PostgreSQL para historizar tarifas y períodos de liquidación.</li>
      </ul>
    `
  },
  {
    id: 'qr-farer',
    title: 'Sistema de Validaciones QR - Farer',
    shortDescription: 'Aplicación web full-stack para el registro de asistentes, generación de tickets QR y escaneo en tiempo real en eventos usando getUserMedia.',
    tags: ['Node.js', 'Express', 'getUserMedia API', 'SQLite', 'TailwindCSS'],
    censor: false,
    group: 'Independientes',
    thumbnail: '/projects/thumbnails/thumbnail_qr.png',
    media: [
      { type: 'video', url: '/projects/Sistema_QR_Farer/Sistema QR Farer.mp4' },
      { type: 'image', url: '/projects/Sistema_QR_Farer/02_ticket_qr.png' },
      { type: 'image', url: '/projects/Sistema_QR_Farer/03_validacion_exitosa.png' },
      { type: 'image', url: '/projects/Sistema_QR_Farer/04_interfaz_escaner.png' },
      { type: 'image', url: '/projects/Sistema_QR_Farer/05_login_page.png' },
      { type: 'image', url: '/projects/Sistema_QR_Farer/ticket-qr-flor-carrillo.png' }
    ],
    functionalSummary: `
      <h3>Control Total de Eventos sin Papel</h3>
      <p>Solución digital para reemplazar tickets físicos en eventos. Permite registrar invitados, generarles un código QR personalizado y validar su acceso y consumiciones desde cualquier celular.</p>
      <ul>
        <li><strong>Anti-Fraude:</strong> Códigos únicos irrepetibles generados al instante.</li>
        <li><strong>Escaneo Integrado Web:</strong> Convierte la cámara de cualquier teléfono móvil en un escáner de códigos QR en vivo a través del navegador, sin obligar al usuario a instalar apps externas.</li>
        <li><strong>Estadísticas en Vivo:</strong> Monitorización de aforo y consumo en tiempo real durante el evento.</li>
      </ul>
    `,
    technicalSummary: `
      <h3>Micro-Arquitectura Eficiente</h3>
      <p>Diseñado para ser ligero, ultra-rápido y resiliente, ideal para conectividades intermitentes.</p>
      <ul>
        <li><strong>Integración de Hardware Web:</strong> Uso intensivo de la API <code>getUserMedia</code> (WebRTC) para capturar el video de la cámara trasera del smartphone en tiempo real (10fps) y decodificar el QR mediante JavaScript en el cliente.</li>
        <li><strong>Backend Node.js:</strong> Servidor Express.js orquestando validaciones con latencia menor a 50ms.</li>
        <li><strong>Canvas API:</strong> Generación programática de tickets visuales en alta resolución (1000x1400px) directamente en el backend.</li>
        <li><strong>Almacenamiento:</strong> Base de datos embebida (SQLite3) optimizada con soporte para evitar condiciones de carrera (race-conditions) en validaciones simultáneas en múltiples puertas.</li>
      </ul>
    `
  },
  {
    id: 'gosti-market',
    title: 'GosTI Market - ERP & POS Complejo',
    shortDescription: 'Sistema integral de gran envergadura (ERP y POS) con facturación, gestión de múltiples catálogos, proveedores y finanzas cruzadas.',
    tags: ['Vite', 'React', 'Java Spring Boot', 'POS Multi-módulo', 'Arquitectura Robusta'],
    censor: false,
    group: 'Independientes',
    thumbnail: '/projects/thumbnails/thumbnail_gosti.jpg',
    media: [
      { type: 'video', url: '/projects/GosTI_Market/2026-05-06 20-04-47.mp4' },
      { type: 'image', url: '/projects/GosTI_Market/Dashboard.png' },
      { type: 'image', url: '/projects/GosTI_Market/04_pos_cobro.png' },
      { type: 'image', url: '/projects/GosTI_Market/Catalogo_productos.png' },
      { type: 'image', url: '/projects/GosTI_Market/Compra_Proveedor.png' },
      { type: 'image', url: '/projects/GosTI_Market/Configuraciones.png' },
      { type: 'image', url: '/projects/GosTI_Market/Detalle_caja.png' },
      { type: 'image', url: '/projects/GosTI_Market/Nueva_promocion.png' },
      { type: 'image', url: '/projects/GosTI_Market/Tutorial_inicial.png' }
    ],
    functionalSummary: `
      <h3>Solución Retail de Alta Escala</h3>
      <p>GosTI Market es mucho más que una caja registradora; es una solución ERP masiva diseñada para el control total del ciclo de vida de un negocio de alto volumen de transacciones diarias.</p>
      <ul>
        <li><strong>Ventas Ultrarrápidas (POS):</strong> Interfaz Point Of Sale sin latencia, hiperoptimizada para lectura de códigos de barras, combos y promociones complejas.</li>
        <li><strong>Gestión de Ecosistema Completo:</strong> Control exhaustivo del catálogo maestro, proveedores (cuentas corrientes y pagos cruzados), y entradas de stock.</li>
        <li><strong>Dashboards Ejecutivos:</strong> Inteligencia de negocio aplicada. Resúmenes financieros al detalle, gestión de apertura/cierre de múltiples cajas y auditoría de flujo de efectivo.</li>
        <li><strong>Onboarding Interactivo:</strong> Tutoriales y ayudas dinámicas dentro del sistema para reducir la curva de aprendizaje de nuevos cajeros.</li>
      </ul>
    `,
    technicalSummary: `
      <h3>Escalabilidad, Datos Masivos e Integración Fiscal</h3>
      <p>Construido sobre una arquitectura orientada a la alta disponibilidad y la integridad absoluta de datos para el sector retail.</p>
      <ul>
        <li><strong>Dominio de Datos Complejo:</strong> Base de datos relacional profunda (PostgreSQL) para soportar el entrelazamiento de ventas, devoluciones, cuentas corrientes de proveedores y auditorías de caja.</li>
        <li><strong>Integración Fiscal (ARCA/AFIP):</strong> Preparado para la emisión asíncrona y masiva de facturación electrónica conforme a las normativas actuales.</li>
        <li><strong>Optimización React / Vite:</strong> Manejo de listas virtualizadas y renders optimizados. La pantalla principal (POS) no puede congelarse; el estado se maneja quirúrgicamente para evitar re-renders cuando el catálogo supera los 10,000 ítems.</li>
        <li><strong>API Gateway (Spring Boot):</strong> Arquitectura de controladores y servicios estructurada para soportar miles de consultas de inventario por segundo.</li>
      </ul>
    `
  },
  {
    id: 'empleados-admin',
    title: 'Gestión de RRHH',
    shortDescription: 'Sistema base para la administración unificada de legajos, usuarios, roles y autenticación corporativa.',
    tags: ['Identity', 'RBAC Roles', 'Spring Security', 'PostgreSQL', 'Auditoría', 'CRUD Avanzado'],
    censor: false,
    group: 'Service Company',
    thumbnail: '/projects/thumbnails/thumbnail_empleados.png',
    media: [
      { type: 'video', url: '/projects/Empleados/Sistema Empleados.mp4' },
      { type: 'image', url: '/projects/Empleados/Captura de pantalla 2026-04-17 071309.png' },
      { type: 'image', url: '/projects/Empleados/Captura de pantalla 2026-04-17 071340.png' },
      { type: 'image', url: '/projects/Empleados/Captura de pantalla 2026-04-17 071418.png' },
      { type: 'image', url: '/projects/Empleados/Captura de pantalla 2026-04-17 071433.png' },
      { type: 'image', url: '/projects/Empleados/Captura de pantalla 2026-04-17 071459.png' },
      { type: 'image', url: '/projects/Empleados/Captura de pantalla 2026-04-17 071556.png' },
      { type: 'image', url: '/projects/Empleados/Captura de pantalla 2026-04-17 071614.png' },
      { type: 'image', url: '/projects/Empleados/Captura de pantalla 2026-04-17 071648.png' },
      { type: 'image', url: '/projects/Empleados/Captura de pantalla 2026-05-11 204933.png' }
    ],
    functionalSummary: `
      <h3>Expediente Digital y Gestión Centralizada</h3>
      <p>Funciona como el centro de información principal ("única fuente de verdad") para todos los recursos humanos de la compañía, reemplazando completamente las carpetas físicas. Está especialmente optimizado para gestionar personal de campo y trabajo por temporada con alta rotación.</p>
      <ul>
        <li><strong>Línea de Tiempo e Historial:</strong> Cada cambio en la vida laboral de un empleado (altas, bajas, traslados, ascensos) queda registrado cronológicamente, formando un historial completo y fácilmente auditable.</li>
        <li><strong>Importación Masiva:</strong> Al inicio de temporada permite importar decenas o cientos de empleados a la vez desde planillas Excel, validando automáticamente los datos para evitar duplicados.</li>
        <li><strong>Dashboards Analíticos:</strong> Ofrece gráficos interactivos con la distribución de los trabajadores por categoría, sucursal, antigüedad y barrio, permitiendo filtrar los listados con un solo clic.</li>
        <li><strong>Notificaciones y Vencimientos:</strong> El sistema emite alertas automáticas por email y notificaciones en pantalla cuando los periodos de prueba de los empleados están próximos a caducar.</li>
        <li><strong>Integración Inter-sistemas:</strong> Abastece de información actualizada (empleados activos y categorías) al Sistema de Empaques y otros módulos del ecosistema, asegurando que todos operen con la misma nómina.</li>
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
    tags: ['Logística', 'Gestión de Campo', 'Data Visualization', 'PWA Offline'],
    censor: false,
    group: 'Service Company',
    thumbnail: '/projects/thumbnails/thumbnail_cosechas.png',
    media: [
      { type: 'video', url: '/projects/Cosechas/Cosechas Porfolio.mp4' },
      { type: 'image', url: '/projects/Cosechas/Captura de pantalla 2026-04-16 182810.png' },
      { type: 'image', url: '/projects/Cosechas/Captura de pantalla 2026-04-16 182822.png' },
      { type: 'image', url: '/projects/Cosechas/Captura de pantalla 2026-04-16 182840.png' },
      { type: 'image', url: '/projects/Cosechas/Captura de pantalla 2026-04-16 182930.png' },
      { type: 'image', url: '/projects/Cosechas/Captura de pantalla 2026-04-16 182956.png' },
      { type: 'image', url: '/projects/Cosechas/Captura de pantalla 2026-04-16 183022.png' },
      { type: 'image', url: '/projects/Cosechas/Captura de pantalla 2026-04-16 183030.png' },
      { type: 'image', url: '/projects/Cosechas/Captura de pantalla 2026-04-22 232640.png' }
    ],
    functionalSummary: `
      <h3>Control Diario de Cosecha</h3>
      <p>Pensado para el día a día del campo. Permite llevar un control exacto de la recolección, reemplazando el uso de papel y previniendo pérdidas de información.</p>
      <ul>
        <li><strong>Panel Simple para Encargados:</strong> Una aplicación móvil muy fácil de usar donde los encargados de cuadrilla pueden registrar rápidamente qué quinta se trabajó, cuántas personas participaron y la cantidad de bandejas o bines recolectados.</li>
        <li><strong>Funcionamiento Sin Internet:</strong> Diseñado específicamente para zonas rurales sin cobertura. Los encargados pueden guardar toda la información en sus celulares sin señal, y el sistema se sincroniza solo apenas recuperan la conexión.</li>
        <li><strong>Gestión de Transportes:</strong> Registro ágil de los viajes realizados, asignando fácilmente qué vehículos y choferes trasladaron la cosecha.</li>
        <li><strong>Control Gerencial:</strong> El sistema calcula promedios de rendimiento al instante. Los administradores acceden a tableros con gráficos comparativos claros y pueden exportar todo a Excel.</li>
      </ul>
    `,
    technicalSummary: `
      <h3>Integración y Sincronización Confiable</h3>
      <p>Un sistema resistente diseñado específicamente para ambientes rurales sin infraestructura de red estable.</p>
      <ul>
        <li><strong>Progressive Web App (PWA):</strong> Capacidades offline-first que garantizan el funcionamiento total de la carga de datos (cuadrillas, choferes, recolección) en caché local cuando no hay señal.</li>
        <li><strong>Cola de Sincronización:</strong> Algoritmo de resolución de conflictos para enviar de manera ordenada lotes de transacciones cuando los dispositivos recuperan la conexión de red (4G/WiFi).</li>
        <li><strong>Dashboards Reactivos:</strong> Implementación de librerías avanzadas (Recharts/Chart.js) para generar inteligencia de negocio visual a gran velocidad y predecir tiempos logísticos.</li>
      </ul>
    `
  }
];
