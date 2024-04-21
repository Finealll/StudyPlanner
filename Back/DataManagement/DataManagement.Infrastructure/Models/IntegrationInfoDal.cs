using DataManagement.Domain.Enums;

namespace DataManagement.Infrastructure.Models;

/// <summary>
/// Информация об интеграции.
/// </summary>
public class IntegrationInfoDal
{
    /// <summary>
    /// Идентификатор.
    /// </summary>
    public int Id { get; set; }

    /// <summary>
    /// Тип интеграции.
    /// </summary>
    public IntegrationType Type { get; set; }

    /// <summary>
    /// Время последнего обновления.
    /// </summary>
    public DateTime Updated { get; set; } = DateTime.UtcNow;

    /// <summary>
    /// Access token.
    /// </summary>
    public string AccessToken { get; set; }

    /// <summary>
    /// Refresh token.
    /// </summary>
    public string RefreshToken { get; set; }
}