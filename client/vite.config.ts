import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@public': path.resolve(__dirname, '../public'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@common': path.resolve(__dirname, './src/common'),
      '@types': path.resolve(__dirname, './src/common/types'),
      '@hoc': path.resolve(__dirname, './src/common/hoc'),
      '@theme': path.resolve(__dirname, './src/common/theme'),
      '@utils': path.resolve(__dirname, './src/common/utils'),
      '@helpers': path.resolve(__dirname, './src/common/utils/helpers'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@router': path.resolve(__dirname, './src/router'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@models': path.resolve(__dirname, './src/models')
    }
  }
})
