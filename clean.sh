sudo apt-get -m -y remove             \
aisleriot                             \
brltty                                \
duplicity                             \
empathy                               \
example-content                       \
gnome-accessibility-themes            \
gnome-contacts                        \
gnome-mahjongg                        \
gnome-mines                           \
gnome-screensaver                     \
gnome-sudoku                          \
gnome-video-effects                   \
landscape-common                      \
libreoffice-avmedia-backend-gstreamer \
libreoffice-base-core                 \
libreoffice-calc                      \
libreoffice-common                    \
libreoffice-core                      \
libreoffice-draw                      \
libreoffice-gnome                     \
libreoffice-gtk                       \
libreoffice-impress                   \
libreoffice-math                      \
libreoffice-ogltrans                  \
libreoffice-pdfimport                 \
libreoffice-style-galaxy              \
libreoffice-writer                    \
libsane-common                        \
python3-uno                           \
rhythmbox                             \
rhythmbox-plugins                     \
rhythmbox-plugin-zeitgeist            \
sane-utils                            \
shotwell                              \
shotwell-common                       \
telepathy-gabble                      \
telepathy-haze                        \
telepathy-idle                        \
telepathy-indicator                   \
telepathy-logger                      \
telepathy-mission-control-5           \
telepathy-salut                       \
totem                                 \
totem-common                          \
totem-plugins                         \
printer-driver-brlaser                \
printer-driver-foo2zjs                \
printer-driver-foo2zjs-common         \
printer-driver-m2300w                 \
printer-driver-ptouch                 \
printer-driver-splix;

sudo snap remove --purge \
bare \
;

sudo snap remove --purge \
core22 \
;

sudo snap remove --purge \
snapd \
;

sudo snap remove --purge \
firefox \
firmware-updater \
gnome-42-2204 \
gtk-common-themes \
snap-store \
snapd-desktop-integration \
thunderbird;

sudo apt -y remove --autoremove snapd;

rm -rf ~/snap;

sudo printf "Package: snapd\nPin: release a=*\nPin-Priority: -10" | sudo tee /etc/apt/preferences.d/nosnap.pref;


sudo apt install --install-suggests gnome-software;
sudo add-apt-repository ppa:mozillateam/ppa;
sudo apt update;
sudo apt install -t 'o=LP-PPA-mozillateam' firefox;

echo 'Unattended-Upgrade::Allowed-Origins:: "LP-PPA-mozillateam:${distro_codename}";' | sudo tee /etc/apt/apt.conf.d/51unattended-upgrades-firefox;
sudo printf "Package: firefox*\nPin: release o=LP-PPA-mozillateam\nPin-Priority: 501" | sudo tee /etc/apt/preferences.d/mozillafirefoxppa;