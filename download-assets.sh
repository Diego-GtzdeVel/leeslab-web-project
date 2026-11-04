#!/bin/sh
# Descarga los assets del frame "home" de Figma (LEES LAB).
# OJO: los links de Figma expiran ~7 días después de generados (aprox. 11 nov 2026).
set -e
A="https://www.figma.com/api/mcp/asset"
D="src/assets"
mkdir -p "$D/clients"
dl() { curl -f -L -s -o "$2" "$A/$1" && echo "ok  $2"; }

dl 28d91959-2276-4cdc-8d0b-4585055ef0d7.png "$D/hero-image.png"
dl bc9e0c1b-2e72-470b-9828-ec83766e6bc2.png "$D/hero-icon.png"
dl 034ed8d8-a780-4bae-ae08-5b1b29df539f.png "$D/insight-image.png"
dl e5049368-2204-41fe-b7ff-8d09ef9134e1.png "$D/hydralog-image.png"
dl 85891e68-1ffe-4bb2-a305-821e3aa8f1b8.svg "$D/badge-appstore.svg"
dl 9fd48280-3060-40ab-b5de-502fcca52661.svg "$D/badge-googleplay.svg"
dl b9acdcd8-dec4-4681-a0e6-58c574a49acb.png "$D/psi-image.png"
dl e3cad88a-2c0f-4cda-91f2-d5b1eef367bb.svg "$D/benefits-spacer.svg"
dl bba20353-9f69-4fed-9040-af36d492bd9a.png "$D/cta-image.png"
dl 0e0f1b30-5048-47d4-a037-179ac69e1394.png "$D/logo-lees-lab.png"
dl f9dd2782-4248-4542-a2f5-bdf95ad82e1f.svg "$D/footer-spacer.svg"

# Logos de clientes (orden en que aparecen en el diseño)
dl 40519019-2975-4460-8b3c-87c4d80fc58e.png "$D/clients/xcaret.png"
dl f29bead3-8d76-4d95-b374-8d9f01889ddb.png "$D/clients/grupo-mexico.png"
dl c10308f8-c5fc-49b3-b3bd-64aa1161589f.png "$D/clients/cfe.png"
dl 390b6c13-4a9d-4929-802a-f5a1373c232d.png "$D/clients/conagua.png"
dl 717e5cf9-4a62-46cf-97e0-96398ec0d3b3.png "$D/clients/jumapac.png"
dl 20c735cc-cd6b-4e62-8270-cbfaaea71c8d.png "$D/clients/jumapa.png"
dl 621d22bd-1357-4338-9dc1-612e3c62343b.png "$D/clients/dreams.png"
dl cc428f9a-59c5-4f77-8cd9-50de9d9c28c6.png "$D/clients/atelier.png"
dl 7def2952-7682-4307-85bc-d05f29a3575d.png "$D/clients/mayakoba.png"
dl 5b25c809-cb25-42c4-afcd-81d13e6e0313.png "$D/clients/finsa.png"
dl a6593f01-f258-4add-81af-93351d921f1e.png "$D/clients/bridgestone.png"
dl 6746c5af-ffbc-441e-b7d3-d0d15b969c3a.png "$D/clients/refineria-dos-bocas.png"
dl 395cf61d-d7ca-47a3-8bf3-7ba993ec7f42.png "$D/clients/grand-park-royal.png"
dl 40da4c6c-3d7e-4518-b5cf-8fff008127e9.png "$D/clients/catalonia.png"
dl bb3114a7-778a-45e9-a245-23ce0c6b3c96.png "$D/clients/secrets.png"
dl f594da1f-e249-46a9-a8bf-3898727dabfb.png "$D/clients/vitro.png"
dl 4ef2a3e8-ed2d-4dbc-999d-b5a5e5d25c74.png "$D/clients/kimberly-clark.png"
dl 4ba47309-e42c-427a-8a1a-34518ba858cd.png "$D/clients/barcelo.png"

# Nav
dl ee3c17df-a176-4e7f-a413-7fbb873829e3.png "$D/nav-logo.png"
dl 86e8e8a2-abfd-4a30-bdcc-e05c93fc3726.svg "$D/nav-divider.svg"

echo "Listo."
