# INTERPOLAÇÃO DE STRINGS
# https://docs.python.org/3/library/string.html#formatexamples
# Mais exemplos, sempre comparando o Python 2 com Python 3, existem no link: https://pyformat.info/

print("Tentativa {} de {}.".format(1,3))

print("Tentativa {1} de {0}.".format(1,3))

print("R$ {:.2f}".format(1.5)) # f = CONVERTE EM FLOAT

print("$ {:,.2f}".format(1758.5))

print("Data {:02d}/{:02d}/{:4}".format(1,12,2021))

###########################
amount = 1758.5
thousands_separator = "."
fractional_separator = ","

currency = "R$ {:,.2f}".format(amount)

if thousands_separator == ".":
    main_currency, fractional_currency = currency.split(".")[0], currency.split(".")[1]
    new_main_currency = main_currency.replace(",", ".")
    currency = new_main_currency + fractional_separator + fractional_currency

print(currency)

###########################

nome = 'Fabio'

print(f'Meu nome é {nome}')
print(f'Meu nome é {nome.lower()}')
print(f'Meu nome é {nome.upper()}')

###########################