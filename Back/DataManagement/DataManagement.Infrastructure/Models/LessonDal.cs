namespace DataManagement.Infrastructure.Models;

/// <summary>
/// Урок.
/// </summary>
public class LessonDal
{
    /// <summary>
    /// Идентификатор.
    /// </summary>
    public Guid Id { get; set; }

    /// <summary>
    /// Предмет.
    /// </summary>
    public SubjectDal Subject { get; set; }
    public int SubjectId { get; set; }

    /// <summary>
    /// Время начала занятия.
    /// </summary>
    public DateTime StartTime { get; set; }
    
    /// <summary>
    /// Протяженность занятия.
    /// </summary>
    public LessonDurationDal Duration { get; set; }
    public int DurationId { get; set; }

    /// <summary>
    /// Ссылка на интеграцию.
    /// </summary>
    public string IntegrationLink { get; set; }

    /// <summary>
    /// Время создания
    /// </summary>
    public DateTime Created { get; set; } = DateTime.UtcNow;
}