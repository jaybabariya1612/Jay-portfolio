import React, { useState } from 'react';
import { 
  Server, 
  Layers, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Sparkles
} from 'lucide-react';
import { playClick } from '../utils/sound';
import { TiltCard3D } from './TiltCard3D';

interface ArchStage {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  tech: string[];
  summary: string;
  codeSnippet: string;
  productionFeature: string;
}

export const ArchitectureVisualizer: React.FC = () => {
  const stages: ArchStage[] = [
    {
      id: 'clients',
      title: 'Client Tier',
      subtitle: 'Multi-platform Frontend Consumers',
      icon: <Layers size={22} />,
      color: '#00D4FF',
      tech: ['React.js (SPA)', 'WinForms Desktop', 'POS Systems', 'Digital Signage Screens'],
      summary: 'Clients communicate via secure HTTPS REST calls and persistent bi-directional WebSockets / SignalR streams for real-time state synchronization.',
      codeSnippet: `// React client connecting to ASP.NET Core SignalR hub
import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder()
  .withUrl("/hubs/telemetry", { accessTokenFactory: () => getAuthToken() })
  .withAutomaticReconnect([0, 2000, 5000, 10000])
  .build();

connection.on("ScreenHeartbeatReceived", (screenId, status) => {
  updateDashboardScreenStatus(screenId, status);
});`,
      productionFeature: 'Powering live display heartbeats in Disploy and real-time user presence tracking in Zoag ERP.'
    },
    {
      id: 'api-layer',
      title: 'API Controllers & Gateways',
      subtitle: 'RESTful Endpoints & Auth Guard',
      icon: <ShieldCheck size={22} />,
      color: '#6C63FF',
      tech: ['ASP.NET Core Web API', 'JWT Bearer Auth', 'SignalR Hubs', 'Swagger UI'],
      summary: 'Thin API Controllers handling routing, model validation, rate limiting, and JWT claims token validation without polluting business logic.',
      codeSnippet: `[ApiController]
[Route("api/v1/[controller]")]
[Authorize(Roles = "Admin,Manager")]
public class OrdersController : ControllerBase
{
    private readonly IOrderService _orderService;
    public OrdersController(IOrderService orderService) => _orderService = orderService;

    [HttpPost("create")]
    public async Task<IActionResult> CreateOrder([FromBody] CreateOrderDto dto)
    {
        var response = await _orderService.ProcessOrderAsync(dto);
        return response.Success ? Ok(response) : BadRequest(response);
    }
}`,
      productionFeature: 'Implemented in Zoag Enterprise Application for Quotes, Inventory, and Sales Orders.'
    },
    {
      id: 'service-layer',
      title: 'Service & Domain Layer',
      subtitle: 'Core Business Logic & Orchestration',
      icon: <Cpu size={22} />,
      color: '#00FFB3',
      tech: ['Service Pattern', 'DTO Architecture', 'Dependency Injection', 'Multi-Tenant Routing'],
      summary: 'Contains pure domain rules, tenant context resolution, transaction coordinators, and third-party orchestration.',
      codeSnippet: `public class OrderService : IOrderService
{
    private readonly IOrderRepository _orderRepo;
    private readonly IHubContext<NotificationHub> _hub;

    public async Task<ApiResponse<OrderResultDto>> ProcessOrderAsync(CreateOrderDto dto)
    {
        // 1. Domain validations & stock verification
        var stockOk = await _orderRepo.VerifyInventoryAvailabilityAsync(dto.Items);
        if (!stockOk) return ApiResponse<OrderResultDto>.Fail("Insufficient stock.");

        // 2. Persist with ACID transaction
        var orderId = await _orderRepo.InsertOrderWithItemsAsync(dto);

        // 3. Real-time broadcast
        await _hub.Clients.Group("Managers").SendAsync("NewOrderAlert", orderId);
        return ApiResponse<OrderResultDto>.Ok(new OrderResultDto { OrderId = orderId });
    }
}`,
      productionFeature: 'Ensures strict separation of concerns and testability across 35+ microservice endpoints.'
    },
    {
      id: 'repository-layer',
      title: 'Repository & DAL',
      subtitle: 'Data Access & Procedure Bridges',
      icon: <Database size={22} />,
      color: '#FF6B9D',
      tech: ['Repository Pattern', 'ADO.NET', 'EF Core', 'MSSQL Stored Procedures'],
      summary: 'Isolates SQL execution, mapping raw datasets into strong C# domain objects using optimized parameter bindings to block SQL injection.',
      codeSnippet: `public async Task<int> InsertOrderWithItemsAsync(CreateOrderDto dto)
{
    using var conn = new SqlConnection(_connectionString);
    using var cmd = new SqlCommand("sp_CreateOrderAndDeductStock", conn);
    cmd.CommandType = CommandType.StoredProcedure;
    
    cmd.Parameters.AddWithValue("@CustomerId", dto.CustomerId);
    cmd.Parameters.AddWithValue("@TotalAmount", dto.TotalAmount);
    
    // Structured TVP parameter for batch item insert
    var tvpParam = cmd.Parameters.AddWithValue("@OrderItems", CreateTvpDataTable(dto.Items));
    tvpParam.SqlDbType = SqlDbType.Structured;
    
    await conn.OpenAsync();
    return Convert.ToInt32(await cmd.ExecuteScalarAsync());
}`,
      productionFeature: 'Sub-50ms execution times across complex joins in SalesPOS and Disploy database routing.'
    },
    {
      id: 'integrations',
      title: 'External Systems & Daemons',
      subtitle: 'OCR, Cloud Storage & Sync Daemons',
      icon: <Cloud size={22} />,
      color: '#F59E0B',
      tech: ['Amazon Textract (OCR)', 'Cloudflare R2', 'QuickBooks API', 'Windows Service Daemons'],
      summary: 'Autonomous background tasks running 24/7 with concurrency locks, exponential retry handlers, and cloud object storage.',
      codeSnippet: `// Background worker sync loop with concurrency guard
protected override async Task ExecuteAsync(CancellationToken stoppingToken)
{
    while (!stoppingToken.IsCancellationRequested)
    {
        if (await _lockManager.TryAcquireLockAsync("TxPartsSyncLock"))
        {
            try {
                await _syncService.ExecuteBiDirectionalSyncAsync();
            } finally {
                await _lockManager.ReleaseLockAsync("TxPartsSyncLock");
            }
        }
        await Task.Delay(TimeSpan.FromMinutes(10), stoppingToken);
    }
}`,
      productionFeature: 'TxPartsSync POS synchronizer and Synthesis intelligent PDF invoice extraction engine.'
    }
  ];

  const [selectedStage, setSelectedStage] = useState<ArchStage>(stages[1]);

  return (
    <section
      id="architecture"
      style={{
        position: 'relative',
        padding: 'clamp(70px, 8vw, 120px) 0',
        background: 'var(--bg-2)'
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 32px)' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-tag">Enterprise System Design</span>
          <h2 className="section-title">
            Clean Backend <span className="grad-primary">Architecture</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            How I architect enterprise ASP.NET Core and React applications — isolating business concerns, guaranteeing ACID transactional safety, and enabling high scalability.
          </p>
        </div>

        {/* Interactive Architecture Flow Tracker */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
            gap: '14px',
            marginBottom: '40px'
          }}
        >
          {stages.map((st, idx) => {
            const isSelected = selectedStage.id === st.id;
            return (
              <button
                key={st.id}
                onClick={() => {
                  playClick();
                  setSelectedStage(st);
                }}
                style={{
                  padding: '18px',
                  borderRadius: '16px',
                  background: isSelected ? 'var(--card)' : 'var(--surface)',
                  border: isSelected ? `2px solid ${st.color}` : '1px solid var(--border)',
                  boxShadow: isSelected ? `0 10px 25px -5px ${st.color}33` : 'none',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: `${st.color}15`,
                      color: st.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {st.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: isSelected ? st.color : 'var(--muted)',
                      fontWeight: 700
                    }}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <div style={{ fontWeight: 700, fontSize: '0.94rem', color: isSelected ? 'var(--bright)' : 'var(--dim)' }}>
                  {st.title}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.4 }}>
                  {st.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Deep-Dive Card */}
        <TiltCard3D maxTilt={4} style={{ borderRadius: '24px' }}>
          <div
            className="glow-card"
            style={{
              padding: 'clamp(24px, 4vw, 40px)',
              background: 'var(--card)',
              border: `1px solid ${selectedStage.color}45`,
              boxShadow: `0 20px 50px -15px ${selectedStage.color}25`
            }}
          >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(28px, 4vw, 44px)',
              alignItems: 'start'
            }}
            className="arch-details-grid"
          >
            {/* Left: Summary & Production Features */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    background: `${selectedStage.color}20`,
                    color: selectedStage.color,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}
                >
                  Stage Details
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--bright)' }}>
                  {selectedStage.title}
                </h3>
              </div>

              <p style={{ color: 'var(--dim)', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '24px' }}>
                {selectedStage.summary}
              </p>

              {/* Technologies in this layer */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                  STACK & PATTERNS:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedStage.tech.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '6px 14px',
                        background: 'var(--bg-2)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--bright)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Real-world production usage */}
              <div
                style={{
                  padding: '18px 20px',
                  borderRadius: '14px',
                  background: 'rgba(108, 99, 255, 0.08)',
                  border: '1px solid rgba(108, 99, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px'
                }}
              >
                <Sparkles size={20} color="var(--cyan)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.76rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan)', fontWeight: 700 }}>
                    REAL-WORLD PRODUCTION IMPLEMENTATION
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--dim)', marginTop: '4px', lineHeight: 1.6 }}>
                    {selectedStage.productionFeature}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Actual C# / TypeScript Code Implementation */}
            <div className="terminal-window" style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.2)' }}>
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot dot-red" />
                  <div className="terminal-dot dot-yellow" />
                  <div className="terminal-dot dot-green" />
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                  {selectedStage.id}.cs — Architecture Pattern
                </span>
                <div />
              </div>
              <pre
                style={{
                  margin: 0,
                  padding: '22px',
                  fontSize: '0.84rem',
                  lineHeight: 1.65,
                  color: '#9CDCFE',
                  overflowX: 'auto',
                  fontFamily: 'var(--font-mono)',
                  background: '#070b16'
                }}
              >
                <code>{selectedStage.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </TiltCard3D>
    </div>
  </section>
  );
};
