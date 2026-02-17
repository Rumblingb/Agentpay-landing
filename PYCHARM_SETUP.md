# AgentPay Landing - PyCharm Setup Guide

## Opening the Project in PyCharm

1. **Open PyCharm**
2. **File > Open** and select the `agentpay-landing` folder
3. PyCharm will detect it as a JavaScript/TypeScript project

## First-Time Setup

### 1. Install Dependencies

Open the terminal in PyCharm (Alt+F12 or View > Tool Windows > Terminal) and run:

```bash
npm install
```

Or use the setup script:
```bash
./setup.sh
```

### 2. Configure Node.js Interpreter

1. Go to **Preferences/Settings** (Cmd+, on Mac, Ctrl+Alt+S on Windows)
2. Navigate to **Languages & Frameworks > Node.js**
3. Ensure Node.js is detected (should show the path automatically)

### 3. Enable TypeScript Support

PyCharm should automatically detect the TypeScript configuration from `tsconfig.json`. If not:

1. **Preferences > Languages & Frameworks > TypeScript**
2. Check "Enable TypeScript Compiler"
3. Select "Use tsconfig.json"

### 4. Configure ESLint (Optional but Recommended)

1. **Preferences > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint**
2. Check "Automatic ESLint configuration"
3. Click "Apply"

## Running the Development Server

### Method 1: npm Scripts Panel
1. Open the **npm** tool window (View > Tool Windows > npm)
2. Double-click on **dev** to start the server

### Method 2: Terminal
In the PyCharm terminal (Alt+F12):
```bash
npm run dev
```

### Method 3: Run Configuration
1. Click the "Add Configuration" button (top right)
2. Click the "+" and select "npm"
3. Set:
   - **Command**: `run`
   - **Scripts**: `dev`
4. Click "OK" and run it

The site will be available at: **http://localhost:3000**

## Project Structure in PyCharm

```
agentpay-landing/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   └── components/       # React components
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Pricing.tsx
│       └── Footer.tsx
├── public/               # Static files (add images here)
├── node_modules/         # Dependencies (auto-generated)
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.js    # Tailwind CSS config
└── next.config.js        # Next.js config
```

## Useful PyCharm Features

### 1. Component Navigation
- **Cmd+Click** (Mac) or **Ctrl+Click** (Windows) on component names to jump to definition
- **Cmd+B** to go to declaration

### 2. Auto-Import
- PyCharm will auto-suggest imports as you type
- Use **Alt+Enter** to import missing dependencies

### 3. Refactoring
- **Shift+F6**: Rename component/variable across all files
- **Cmd+Alt+M**: Extract method/component

### 4. Code Formatting
- **Cmd+Alt+L** (Mac) or **Ctrl+Alt+L** (Windows): Format code
- PyCharm respects Prettier configuration automatically

### 5. Live Templates
Create shortcuts for common patterns:
1. **Preferences > Editor > Live Templates**
2. Add templates for React components, etc.

## Common Tasks

### Starting Fresh
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Building for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

### Type Checking
PyCharm does this automatically, but you can also run:
```bash
npx tsc --noEmit
```

## Debugging in PyCharm

1. Install the **JavaScript Debugger** plugin (usually pre-installed)
2. Set breakpoints by clicking in the gutter next to line numbers
3. Right-click on `package.json` > "Debug 'dev'"
4. PyCharm will attach the debugger to the Next.js process

## File Watching

If files aren't updating automatically:
1. **Help > Edit Custom VM Options**
2. Add: `-Didea.max.intellisense.filesize=10000`
3. Restart PyCharm

## Troubleshooting

### "Cannot find module" errors
- Run `npm install` again
- Invalidate Caches: **File > Invalidate Caches > Invalidate and Restart**

### TypeScript errors in IDE
- Ensure `tsconfig.json` is recognized (bottom right: should say "TypeScript: X.X.X")
- Restart TypeScript service: **View > Tool Windows > TypeScript** > Restart

### Port 3000 already in use
Kill the existing process:
```bash
lsof -ti:3000 | xargs kill
```

Or use a different port:
```bash
PORT=3001 npm run dev
```

## Next Steps

1. **Customize the content**: Edit components in `src/components/`
2. **Add pages**: Create new files in `src/app/`
3. **Update styling**: Modify Tailwind classes or `globals.css`
4. **Add images**: Place them in `public/` folder

## Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs
- PyCharm Web Dev: https://www.jetbrains.com/help/pycharm/javascript.html

## Support

For questions about the landing page, contact: hello@agentpay.ai
