import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import CoffeeScript from "coffeescript"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'coffee_compile',
      transform: function(src, id) {

        // compile coffee files to js
        if (/\.coffee$/.test(id)) {
          var {js, sourceMap} = CoffeeScript.compile(src, { sourceMap: true })
          return { code: js, map: sourceMap }
        }

      }
    }
  ],
})
