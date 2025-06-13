# Configuração do Envio de E-mails

Para que o formulário de contato funcione corretamente, siga estas etapas para configurar o envio de e-mails:

## 1. Configuração das Variáveis de Ambiente

1. Faça uma cópia do arquivo `.env.local.example` para `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edite o arquivo `.env.local` e preencha as seguintes variáveis com suas credenciais de e-mail:

   ```env
   # Configurações do servidor de e-mail
   EMAIL_SERVER_HOST=smtp.seu-provedor.com
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_SECURE=false
   EMAIL_SERVER_USER=seu-email@exemplo.com
   EMAIL_SERVER_PASSWORD=sua-senha
   EMAIL_FROM=seu-email@exemplo.com
   EMAIL_FROM_NAME="IMS Manutenção"
   
   # Configurações do site
   NEXT_PUBLIC_SITE_URL=https://imsmanutencao.com.br
   NEXT_PUBLIC_CONTACT_PHONE="+5511999999999"
   NEXT_PUBLIC_WHATSAPP_NUMBER="5511999999999"
   ```

## 2. Configuração do Servidor de E-mail

Recomendamos os seguintes serviços de e-mail:

### Para Desenvolvimento Local:
- **Ethereal Email** (https://ethereal.email/)
  - Crie uma conta gratuita
  - Use as credenciais fornecidas no seu painel

### Para Produção:
- **SendGrid** (https://sendgrid.com/)
  - Crie uma conta gratuita (até 100 e-mails/dia)
  - Gere uma chave de API e use como senha
  - Host: `smtp.sendgrid.net`
  - Porta: `587`

- **Amazon SES**
  - Ideal para volumes maiores de e-mails
  - Oferece camada gratuita generosa

## 3. Testando o Envio de E-mails

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse a página de contato e envie uma mensagem de teste

3. Verifique se o e-mail foi recebido na caixa de entrada do destinatário

## 4. Solução de Problemas Comuns

- **E-mails não estão sendo enviados**
  - Verifique se as variáveis de ambiente estão corretas
  - Confira se o servidor de e-mail está acessível
  - Verifique os logs do servidor para mensagens de erro

- **Erro de autenticação**
  - Confirme se o nome de usuário e senha estão corretos
  - Verifique se o acesso a aplicações menos seguras está ativado (caso use Gmail)

- **E-mails indo para spam**
  - Configure corretamente os registros SPF, DKIM e DMARC para seu domínio
  - Use um endereço de e-mail com o mesmo domínio do seu site

## 5. Configurações Adicionais

### Limite de Tamanho de Anexos
Por padrão, o Next.js tem um limite de 1MB para o corpo da requisição. Se precisar enviar anexos maiores, adicione esta configuração ao seu `next.config.js`:

```javascript
module.exports = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Ajuste conforme necessário
    },
  },
}
```

### Logs de Depuração
Para habilitar logs detalhados do Nodemailer, adicione esta linha antes de `transporter.sendMail()`:

```javascript
transporter.verify(function(error, success) {
  if (error) {
    console.log('Erro na conexão SMTP:', error);
  } else {
    console.log('Servidor SMTP pronto para enviar mensagens');
  }
});
```
