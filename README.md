# meteor-react-ionic

Demo for build error when using ionic with meteor.

Added symlinks to let meteor recompile @ionic/core, @ionic/react and ionicons package, because these packages use ES Module import/export statements

Added static assets plugin (nathantreid:static-assets) to get correct paths for imported svg files in ionicons package, which is not working at the moment

Instructions

clone - meteor npm install - meteor run
