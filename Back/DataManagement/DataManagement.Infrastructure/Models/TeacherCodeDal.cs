namespace DataManagement.Infrastructure.Models;

/// <summary>
/// Коды для добавления преподавателей.
/// </summary>
public class TeacherCodeDal
{
    /// <summary>
    /// Идентификатор.
    /// </summary>
    public Guid Id { get; set; }

    /// <summary>
    /// Ид преподавателя.
    /// </summary>
    public TeacherDal Teacher { get; set; }
    public int TeacherId { get; set; }

    /// <summary>
    /// Время создания кода.
    /// </summary>
    public DateTime Created { get; set; }

    /// <summary>
    /// Код преподавателя.
    /// </summary>
    public string Code { get; set; }
}