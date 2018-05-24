# Theme Switcher

This will help you dynamically change/switch a theme depending on what MS Teams APP selected theme is,

Please see here for more info
<https://blogs.msdn.microsoft.com/richard_dizeregas_blog/2017/02/07/microsoft-teams-and-custom-tab-theme/>

## Getting Started

The main.js file inside js folder will register microsoft.registerOnThemeChangeHandler for you.

It will also register microsoftTeams.getContext onto window.load.

These two bindings will retrieve the context.theme and pass it onto themechanger object which will enable "theme".css if it is available in the head of the document

### Prerequisites

You will need Microsoft SDK <https://docs.microsoft.com/en-us/javascript/api/overview/msteams-client>

### Installing

```
Clone this repo and insert js->main.js onto your site
```

And

```
Download microsoft and insert into your site
```


## Built With

* [Microsoft Teams App SDK](https://docs.microsoft.com/en-us/javascript/api/overview/msteams-client) - MS Teams App SDK

## Authors

* [Mehmet Enis](https://www.linkedin.com/in/mehmetenis/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Martin Simecek](https://github.com/msimecek)
