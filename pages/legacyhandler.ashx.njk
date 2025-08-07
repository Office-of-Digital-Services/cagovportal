---
layout: null
permalink: legacyhandler.ashx
eleventyExcludeFromCollections: true
---
<%@ WebHandler Language="C#" Class="ItemRedirectHandler" %>

using System;
using System.Web;

public class ItemRedirectHandler : IHttpHandler
{
    // Declare a readonly 2-dimensional array to store the redirects
    private static readonly string[,] redirects = new string[,]
    {

      // Legacy Services
      {%- for service in legacyUrls | pluck("service","1") %}
      {"{{service.target}}","{{service.source}}"},
      {%- endfor %}

      // Legacy Agencies
      {%- for agency in legacyUrls | pluck("service","0") %}
      {"{{agency.target}}","{{agency.source}}"}{{-"," if not loop.last-}}
      {%- endfor %}
    };

    public void ProcessRequest(HttpContext context)
    {
        try
        {
            string item = context.Request.QueryString["item"];
            string basePath = string.Format("/{0}", context.Request.QueryString["path"]).ToLower();
            string queryString = "";

            if (!string.IsNullOrEmpty(item))
            {
                item = item.ToLower().Replace("dashline", "-");
                queryString = "?item=" + HttpUtility.UrlEncode(item);
            }

            string currentPath = basePath + queryString;
            string redirectLocation = null;

            for (int i = 0; i < redirects.GetLength(0); i++)
            {
                string targetPath = redirects[i, 1].ToLower();
                if (currentPath == targetPath || (currentPath.Length > 20 && (targetPath.StartsWith(currentPath) || currentPath.StartsWith(targetPath))))
                {
                    redirectLocation = redirects[i, 0];
                    break;
                }
            }

            if (redirectLocation != null)
            {
                context.Response.StatusCode = 301; // Permanent Redirect
                context.Response.RedirectLocation = redirectLocation;
                context.Response.CacheControl = "public";
                context.Response.AddHeader("Expires", DateTime.UtcNow.AddYears(1).ToString("R")); // RFC 1123 format
                context.Response.AddHeader("Last-Modified", DateTime.UtcNow.ToString("R"));
                context.Response.AddHeader("X-Status-Message", "Permanent redirect issued for: " + currentPath);
            }
            else
            {
                context.Response.StatusCode = 404; // Not Found
                context.Response.Headers.Add("X-Status-Message", "Target path not found. " + currentPath);
            }
        }
        catch (Exception ex)
        {
            context.Response.StatusCode = 500;
            context.Response.Headers.Add("X-Status-Message", ex.Message + " " + context.Request.Url);
        }
        finally
        {
            context.Response.End();
        }
    }

    // Indicate that the handler is not reusable
    public bool IsReusable
    {
        get { return false; }
    }
}



