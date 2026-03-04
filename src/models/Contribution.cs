namespace Models;

using Microsoft.Data.Sqlite;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;


[DataContract]
[JsonConverter(typeof(JsonStringEnumConverter))]
public enum ContributionType{
    [EnumMember(Value = "Author")]
    Author,
    [EnumMember(Value = "Illustrator")]
    Illustrator,
    [EnumMember(Value = "Other")]
    Other,
}


public class Contribution{
    //Book and Author make a composite primary key
    [ForeignKey("Book")]
    public required long BookId {get;set;}
    public Book? Book{get;set;}

    [ForeignKey("Author")]
    public required long ContributorId{get;set;}
    public Contributor? Contributor{get;set;}

    public ContributionType Kind{get;set;}
}