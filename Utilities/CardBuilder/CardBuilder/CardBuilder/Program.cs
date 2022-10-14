DirectoryInfo di = new DirectoryInfo(".");
List<DirectoryInfo> dirs = di.GetDirectories().ToList();
//people.Sort((x, y) => string.Compare(x.LastName, y.LastName));
dirs.Sort((x, y) => DateTime.Compare(DateTime.Parse(x.Name.Split("_", 2)[1]), DateTime.Parse(y.Name.Split("_", 2)[1])));
foreach(DirectoryInfo d in dirs)
{
    String[] dirName = d.Name.Split("_", 2);
    String title = dirName[0];
    String date = dirName[1];
    foreach(FileInfo f in d.GetFiles())
    {
        String path = "img/trips/" + d.Name + "/" + f.Name;
        String output = @"
		  <div class=""card"">
			<img class=""card-img-top"" src="""+path+@""" alt=""Image"">
			<div class=""card-body"">
			  <h5 class=""card-title"">"+title+@"</h5>
			  <p class=""card-text"">"+date+@"</p>
			</div>
		  </div>";
        Console.WriteLine(output);
    }
}
