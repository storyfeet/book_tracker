using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace book_tracker.Migrations
{
    /// <inheritdoc />
    public partial class GenreToBooks : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Genres",
                table: "Authors");

            migrationBuilder.AddColumn<string>(
                name: "Genres",
                table: "Books",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Genres",
                table: "Books");

            migrationBuilder.AddColumn<string>(
                name: "Genres",
                table: "Authors",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
